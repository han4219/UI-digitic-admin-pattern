import { MenuItem } from '@/interface/layout/menu.interface.ts'
import React from 'react'

export const getMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  style?: React.CSSProperties,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    style
  } as MenuItem
}
