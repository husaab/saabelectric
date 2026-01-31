import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge class names with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format phone number for tel: link
 */
export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/[^0-9]/g, '')}`;
}

/**
 * Format email for mailto: link
 */
export function formatEmailLink(email: string): string {
  return `mailto:${email}`;
}
