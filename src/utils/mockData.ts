
export type Role = 'seller' | 'logistics' | 'delivery' | 'business' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  brand: string;
  size: string[];
  color: string[];
  rating: number;
  createdAt: string;
  sellerId: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  products: { productId: string; quantity: number }[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Seller',
    email: 'john@dolphnet.com',
    role: 'seller',
    avatar: 'https://ui-avatars.com/api/?name=John+Seller&background=0D8ABC&color=fff'
  },
  {
    id: '2',
    name: 'Lisa Logistics',
    email: 'lisa@dolphnet.com',
    role: 'logistics',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Logistics&background=0D8ABC&color=fff'
  },
  {
    id: '3',
    name: 'Dave Delivery',
    email: 'dave@dolphnet.com',
    role: 'delivery',
    avatar: 'https://ui-avatars.com/api/?name=Dave+Delivery&background=0D8ABC&color=fff'
  },
  {
    id: '4',
    name: 'Barbara Business',
    email: 'barbara@dolphnet.com',
    role: 'business',
    avatar: 'https://ui-avatars.com/api/?name=Barbara+Business&background=0D8ABC&color=fff'
  },
  {
    id: '5',
    name: 'Admin User',
    email: 'admin@dolphnet.com',
    role: 'admin',
    avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff'
  },
];

// Mock Shoe Products
export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Wave Runner Athletic Shoe',
    category: 'Running',
    price: 129.99,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    description: 'Lightweight running shoes with wave technology for enhanced stability and comfort.',
    brand: 'WaveTech',
    size: ['7', '8', '9', '10', '11', '12'],
    color: ['Blue', 'Black', 'Red'],
    rating: 4.7,
    createdAt: '2023-12-01',
    sellerId: '1'
  },
  {
    id: 'p2',
    name: 'Aqua Comfort Casual Sneakers',
    category: 'Casual',
    price: 89.99,
    stock: 28,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    description: 'Stylish sneakers with water-resistant coating and memory foam insoles.',
    brand: 'AquaStep',
    size: ['6', '7', '8', '9', '10'],
    color: ['White', 'Gray', 'Navy'],
    rating: 4.3,
    createdAt: '2023-11-15',
    sellerId: '1'
  },
  {
    id: 'p3',
    name: 'Pro Tide Basketball Shoes',
    category: 'Basketball',
    price: 159.99,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3',
    description: 'High-performance basketball shoes with extra ankle support and cushioned landing.',
    brand: 'TideMax',
    size: ['8', '9', '10', '11', '12', '13'],
    color: ['Black/Red', 'White/Blue', 'Gray/Orange'],
    rating: 4.9,
    createdAt: '2024-01-05',
    sellerId: '1'
  },
  {
    id: 'p4',
    name: 'Dolphin Flex Hiking Boots',
    category: 'Hiking',
    price: 149.99,
    stock: 8,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0',
    description: 'Waterproof hiking boots with superior grip and ankle protection.',
    brand: 'TrekPath',
    size: ['7', '8', '9', '10', '11', '12'],
    color: ['Brown', 'Green', 'Black'],
    rating: 4.8,
    createdAt: '2023-10-20',
    sellerId: '1'
  },
  {
    id: 'p5',
    name: 'Net Flow Slip-ons',
    category: 'Casual',
    price: 69.99,
    stock: 34,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    description: 'Breathable slip-on shoes perfect for everyday comfort.',
    brand: 'FlowStep',
    size: ['6', '7', '8', '9', '10', '11'],
    color: ['White', 'Black', 'Gray', 'Blue'],
    rating: 4.5,
    createdAt: '2023-11-28',
    sellerId: '1'
  },
  {
    id: 'p6',
    name: 'Ocean Depth Training Shoes',
    category: 'Training',
    price: 119.99,
    stock: 22,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
    description: 'Cross-training shoes with stability control and impact absorption.',
    brand: 'DeepBlue',
    size: ['7', '8', '9', '10', '11'],
    color: ['Blue/Black', 'Gray/Lime', 'Black/Red'],
    rating: 4.6,
    createdAt: '2023-12-15',
    sellerId: '1'
  },
  {
    id: 'p7',
    name: 'Tech Mesh Walking Shoes',
    category: 'Walking',
    price: 79.99,
    stock: 41,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
    description: 'Lightweight walking shoes with breathable mesh upper and cushioned soles.',
    brand: 'MeshTech',
    size: ['7', '8', '9', '10', '11', '12'],
    color: ['Gray', 'Black', 'Blue', 'Red'],
    rating: 4.2,
    createdAt: '2024-02-01',
    sellerId: '1'
  },
  {
    id: 'p8',
    name: 'Aqua Formal Leather Oxfords',
    category: 'Formal',
    price: 139.99,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1613987876445-18a6d069d78d',
    description: 'Premium leather oxford shoes with water-resistant treatment and comfort insoles.',
    brand: 'AquaFormal',
    size: ['8', '9', '10', '11', '12'],
    color: ['Black', 'Brown', 'Tan'],
    rating: 4.7,
    createdAt: '2023-09-10',
    sellerId: '1'
  }
];

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: 'O1001',
    customerId: 'c1',
    customerName: 'Emma Wilson',
    products: [{ productId: 'p1', quantity: 1 }],
    total: 129.99,
    status: 'delivered',
    date: '2024-03-15'
  },
  {
    id: 'O1002',
    customerId: 'c2',
    customerName: 'Michael Brown',
    products: [{ productId: 'p3', quantity: 1 }, { productId: 'p5', quantity: 2 }],
    total: 299.97,
    status: 'shipped',
    date: '2024-03-24'
  },
  {
    id: 'O1003',
    customerId: 'c3',
    customerName: 'Sophia Garcia',
    products: [{ productId: 'p2', quantity: 1 }],
    total: 89.99,
    status: 'processing',
    date: '2024-04-02'
  },
  {
    id: 'O1004',
    customerId: 'c4',
    customerName: 'James Martinez',
    products: [{ productId: 'p4', quantity: 1 }, { productId: 'p7', quantity: 1 }],
    total: 229.98,
    status: 'pending',
    date: '2024-04-10'
  },
  {
    id: 'O1005',
    customerId: 'c5',
    customerName: 'Olivia Johnson',
    products: [{ productId: 'p6', quantity: 2 }],
    total: 239.98,
    status: 'processing',
    date: '2024-04-08'
  }
];

// Sales Data for Chart
export const mockSalesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 2000 },
  { name: 'Apr', sales: 2780 },
  { name: 'May', sales: 1890 },
  { name: 'Jun', sales: 2390 },
  { name: 'Jul', sales: 3490 },
];

export const mockCategorySales = [
  { name: 'Running', value: 35 },
  { name: 'Casual', value: 30 },
  { name: 'Basketball', value: 15 },
  { name: 'Hiking', value: 10 },
  { name: 'Formal', value: 10 },
];

// Stats for dashboard
export const mockStats = {
  totalProducts: 8,
  activeListings: 8,
  pendingOrders: 2,
  revenueThisMonth: 1089.90
};
