// Application Constants for Cattle Registration System

// CRITICAL REQUIREMENT: Manual Approval Process
export const APPROVAL_PROCESS = {
  // NO AUTOMATIC TECH-BASED APPROVAL
  // All cattle registrations MUST be manually approved by Regional Admin
  REQUIRES_MANUAL_APPROVAL: true,
  AUTO_APPROVAL_DISABLED: true,
  APPROVAL_AUTHORITY: 'REGIONAL_ADMIN',
  MAX_APPROVAL_TIME_HOURS: 48,
};

// User Roles
export const USER_ROLES = {
  FARMER: 'farmer',
  REGIONAL_ADMIN: 'regional_admin',
  SUPER_ADMIN: 'super_admin',
};

// Cattle Registration Status
export const CATTLE_STATUS = {
  PENDING: 'pending', // Waiting for admin approval
  APPROVED: 'approved', // Approved by regional admin
  DECLINED: 'declined', // Declined by regional admin
  ARCHIVED: 'archived', // Moved to archive by owner
  TRANSIT: 'transit', // In process of ownership transfer
};

// Image Categories - As per requirement (14 images max)
export const IMAGE_CATEGORIES = {
  MUZZLE: {
    key: 'muzzle',
    label: 'Muzzle',
    required: 3,
    description: 'Close-up of cattle muzzle',
  },
  FACE: {
    key: 'face',
    label: 'Face',
    required: 3,
    description: 'Front face view',
  },
  LEFT_SIDE: {
    key: 'left',
    label: 'Left Side',
    required: 3,
    description: 'Left side face',
  },
  RIGHT_SIDE: {
    key: 'right',
    label: 'Right Side',
    required: 3,
    description: 'Right side face',
  },
  FULL_BODY_LEFT: {
    key: 'full_left',
    label: 'Full Body Left',
    required: 1,
    description: 'Full body from left',
  },
  FULL_BODY_RIGHT: {
    key: 'full_right',
    label: 'Full Body Right',
    required: 1,
    description: 'Full body from right',
  },
};


export const MAX_IMAGES_PER_CATTLE = 14;


export const CATTLE_CONSTRAINTS = {

  WITH_EAR_TAG: true,
  WITHOUT_FACE_ROPE: true,
  WITHOUT_NOSE_ROPE: true,
  MATCHING_REQUIREMENT: '1_TO_N', 
};


export const API_ENDPOINTS = {
  BASE_URL: 'https://your-api-domain.com/api', 
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    FORGOT_PASSWORD: '/auth/forgot-password',
    VERIFY_OTP: '/auth/verify-otp',
  },
  CATTLE: {
    REGISTER: '/cattle/register',
    GET_USER_CATTLE: '/cattle/user',
    GET_ALL: '/cattle/all',
    GET_BY_ID: '/cattle/:id',
    UPDATE: '/cattle/:id/update',
    ARCHIVE: '/cattle/:id/archive',
    SEARCH: '/cattle/search',
  },
  ADMIN: {
    GET_PENDING: '/admin/pending-approvals',
    APPROVE: '/admin/approve/:id',
    DECLINE: '/admin/decline/:id',
    GET_STATS: '/admin/stats',
    GET_REGIONAL_DATA: '/admin/region/:region',
  },
};

// Form Validation Rules
export const VALIDATION_RULES = {
  MOBILE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 15,
    PATTERN: /^[0-9]{10,15}$/,
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  },
  CATTLE_ID: {
    PATTERN: /^[A-Z0-9]{6,12}$/,
  },
};

// Regional Admin Configuration
export const REGIONAL_ADMIN_CONFIG = {
  // Each region can have only ONE regional admin
  ONE_ADMIN_PER_REGION: true,
  REGIONS: [
    'Bihar',
    'Uttar Pradesh',
    'Maharashtra',
    'Gujarat',
    'Rajasthan',
    'Punjab',
  ],
};

export const MESSAGES = {
  SUCCESS: {
    REGISTRATION: 'Cattle registered successfully! Pending admin approval.',
    APPROVAL: 'Cattle approved successfully!',
    DECLINE: 'Cattle registration declined.',
    UPDATE: 'Information updated successfully.',
    ARCHIVE: 'Cattle archived successfully.',
  },
  ERROR: {
    NETWORK: 'Network error. Please check your connection.',
    UNAUTHORIZED: 'Please login to continue.',
    FORBIDDEN: 'You do not have permission for this action.',
    NOT_FOUND: 'Requested resource not found.',
    GENERIC: 'Something went wrong. Please try again.',
  },
  INFO: {
    PENDING_APPROVAL: 'Your cattle registration is pending approval from the regional admin.',
    APPROVAL_REQUIRED: 'This cattle registration requires manual approval.',
  },
};


export const STORAGE_KEYS = {
  USER: 'user',
  USER_ROLE: 'userRole',
  TOKEN: 'token',
  CATTLE_CACHE: 'cattleCache',
};

export const IMAGE_CONFIG = {
  MAX_SIZE_MB: 5,
  ALLOWED_TYPES: ['image/jpeg', 'image/jpg', 'image/png'],
  QUALITY: 0.8,
  MAX_WIDTH: 1920,
  MAX_HEIGHT: 1920,
};

export default {
  APPROVAL_PROCESS,
  USER_ROLES,
  CATTLE_STATUS,
  IMAGE_CATEGORIES,
  MAX_IMAGES_PER_CATTLE,
  CATTLE_CONSTRAINTS,
  API_ENDPOINTS,
  VALIDATION_RULES,
  REGIONAL_ADMIN_CONFIG,
  MESSAGES,
  STORAGE_KEYS,
  IMAGE_CONFIG,
};