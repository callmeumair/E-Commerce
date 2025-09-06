export interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: 'ETH' | 'USD'
  image: string
  images?: string[]
  category: string
  brand?: string
  inStock: boolean
  stockQuantity?: number
  rating?: number
  reviewCount?: number
  tags?: string[]
  createdAt: Date
  updatedAt: Date
  seller: {
    id: string
    name: string
    avatar?: string
    rating?: number
  }
}

export interface CartItem {
  id: string
  product: Product
  quantity: number
  addedAt: Date
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  currency: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  createdAt: Date
  updatedAt: Date
  trackingNumber?: string
}

export interface Address {
  id?: string
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
  isDefault?: boolean
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  addresses: Address[]
  orders: Order[]
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  parentId?: string
  children?: Category[]
  productCount?: number
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  comment: string
  verified: boolean
  helpful: number
  createdAt: Date
}

export interface FilterOption {
  id: string
  name: string
  value: string
  count?: number
}

export interface FilterGroup {
  id: string
  name: string
  type: 'checkbox' | 'radio' | 'range' | 'select'
  options: FilterOption[]
}

export interface SearchParams {
  query?: string
  category?: string
  minPrice?: number
  maxPrice?: number
  sortBy?: 'price' | 'name' | 'rating' | 'newest' | 'popularity'
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
  filters?: Record<string, string[]>
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  pagination?: PaginationInfo
}

export interface Web3Config {
  contractAddress: string
  networkId: number
  rpcUrl: string
}

export interface WalletConnection {
  address: string
  balance: string
  network: string
  connected: boolean
}

export type Theme = 'light' | 'dark' | 'system'

export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}
