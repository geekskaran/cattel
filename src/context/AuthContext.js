import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState(null); // 'farmer', 'regional_admin', 'super_admin'

  // Check for existing session on app load
  useEffect(() => {
    checkUserSession();
  }, []);

  const checkUserSession = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      const userRoleData = await AsyncStorage.getItem('userRole');
      
      if (userData) {
        setUser(JSON.parse(userData));
        setUserRole(userRoleData || 'farmer');
      }
    } catch (error) {
      console.error('Session check error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setIsLoading(true);
      const response = await authService.login(credentials);
      
      if (response.success) {
        const userData = response.user;
        const role = response.role || 'farmer';
        
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        await AsyncStorage.setItem('userRole', role);
        await AsyncStorage.setItem('token', response.token);
        
        setUser(userData);
        setUserRole(role);
        
        return { success: true };
      }
      
      return { success: false, message: response.message };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setIsLoading(true);
      const response = await authService.signup(userData);
      
      if (response.success) {
        return { success: true, message: 'Account created successfully' };
      }
      
      return { success: false, message: response.message };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, message: 'Signup failed. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.multiRemove(['user', 'userRole', 'token']);
      setUser(null);
      setUserRole(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateUserProfile = async (updatedData) => {
    try {
      const response = await authService.updateProfile(updatedData);
      
      if (response.success) {
        const updatedUser = { ...user, ...updatedData };
        await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        return { success: true };
      }
      
      return { success: false, message: response.message };
    } catch (error) {
      console.error('Profile update error:', error);
      return { success: false, message: 'Update failed' };
    }
  };

  const value = {
    user,
    userRole,
    isLoading,
    login,
    signup,
    logout,
    updateUserProfile,
    isAuthenticated: !!user,
    isFarmer: userRole === 'farmer',
    isRegionalAdmin: userRole === 'regional_admin',
    isSuperAdmin: userRole === 'super_admin',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};