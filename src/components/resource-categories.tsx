import { useState } from 'react';
import { 
  Heart, 
  Home, 
  Utensils, 
  GraduationCap, 
  Briefcase, 
  Users, 
  Shield, 
  Baby,
  Stethoscope,
  DollarSign,
  Bus,
  Globe
} from 'lucide-react';
import { ResourceCard } from './resource-card';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const categories = [
  { id: 'all', name: 'All Resources', icon: Globe, color: 'gray' },
  { id: 'health', name: 'Healthcare', icon: Stethoscope, color: 'blue' },
  { id: 'housing', name: 'Housing', icon: Home, color: 'green' },
  { id: 'food', name: 'Food Assistance', icon: Utensils, color: 'orange' },
  { id: 'education', name: 'Education', icon: GraduationCap, color: 'purple' },
  { id: 'employment', name: 'Employment', icon: Briefcase, color: 'indigo' },
  { id: 'mental-health', name: 'Mental Health', icon: Heart, color: 'pink' },
  { id: 'legal', name: 'Legal Aid', icon: Shield, color: 'red' },
  { id: 'family', name: 'Family Services', icon: Baby, color: 'yellow' },
  { id: 'financial', name: 'Financial Aid', icon: DollarSign, color: 'emerald' },
  { id: 'transportation', name: 'Transportation', icon: Bus, color: 'cyan' },
  { id: 'community', name: 'Community Programs', icon: Users, color: 'violet' },
];

const mockResources = [
  {
    id: '1',
    name: 'City Community Health Center',
    category: 'health',
    description: 'Affordable healthcare services for all residents, including primary care, dental, and mental health services.',
    address: '123 Main Street',
    phone: '(555) 123-4567',
    hours: 'Mon-Fri 8am-6pm',
    distance: '0.5 miles',
  },
  {
    id: '2',
    name: 'Downtown Food Bank',
    category: 'food',
    description: 'Free groceries and meals for families in need. No appointment necessary.',
    address: '456 Oak Avenue',
    phone: '(555) 234-5678',
    hours: 'Tue-Thu 10am-4pm',
    distance: '1.2 miles',
  },
  {
    id: '3',
    name: 'Career Development Center',
    category: 'employment',
    description: 'Job training, resume assistance, and employment placement services.',
    address: '789 Elm Street',
    phone: '(555) 345-6789',
    hours: 'Mon-Fri 9am-5pm',
    distance: '2.1 miles',
  },
  {
    id: '4',
    name: 'Family Housing Resources',
    category: 'housing',
    description: 'Emergency shelter, transitional housing, and rental assistance programs.',
    address: '321 Pine Road',
    phone: '(555) 456-7890',
    hours: '24/7 Hotline',
    distance: '1.8 miles',
  },
  {
    id: '5',
    name: 'Adult Learning Center',
    category: 'education',
    description: 'Free GED classes, ESL programs, and computer literacy training.',
    address: '654 Maple Drive',
    phone: '(555) 567-8901',
    hours: 'Mon-Thu 6pm-9pm',
    distance: '3.0 miles',
  },
  {
    id: '6',
    name: 'Mental Wellness Clinic',
    category: 'mental-health',
    description: 'Counseling, therapy, and crisis intervention services on a sliding scale.',
    address: '987 Cedar Lane',
    phone: '(555) 678-9012',
    hours: 'Mon-Sat 9am-7pm',
    distance: '1.5 miles',
  },
  {
    id: '7',
    name: 'Legal Aid Society',
    category: 'legal',
    description: 'Free legal assistance for low-income residents in civil matters.',
    address: '147 Court Street',
    phone: '(555) 789-0123',
    hours: 'Mon-Fri 9am-4pm',
    distance: '2.5 miles',
  },
  {
    id: '8',
    name: 'Youth & Family Services',
    category: 'family',
    description: 'Childcare assistance, parenting classes, and family counseling.',
    address: '258 Park Avenue',
    phone: '(555) 890-1234',
    hours: 'Mon-Fri 8am-6pm',
    distance: '1.0 miles',
  },
];

export function ResourceCategories() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredResources = selectedCategory === 'all' 
    ? mockResources 
    : mockResources.filter(r => r.category === selectedCategory);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-neutral-900 mb-4 text-5xl tracking-tight">
            Browse by category
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Explore our organized collection of community resources
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={isActive ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`gap-2 text-sm rounded-full ${
                    isActive
                      ? 'bg-neutral-900 hover:bg-neutral-800'
                      : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100'
                  }`}
                  size="sm"
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {category.name}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ResourceCard resource={resource} />
            </motion.div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-neutral-400">No resources found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}