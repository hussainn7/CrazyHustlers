import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

interface Resource {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  phone: string;
  hours: string;
  distance: string;
}

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }} 
      transition={{ duration: 0.2 }}
    >
      <Card className="hover:shadow-lg transition-all bg-white border-neutral-200 overflow-hidden group">
        <CardHeader>
          <div className="flex items-start justify-between mb-3">
            <Badge variant="secondary" className="text-xs bg-neutral-100 text-neutral-600 border-0">
              {resource.category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </Badge>
            <span className="text-xs text-neutral-400">{resource.distance}</span>
          </div>
          <CardTitle className="text-neutral-900 text-xl">{resource.name}</CardTitle>
          <CardDescription className="text-neutral-500">{resource.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2 text-sm text-neutral-600">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-400" strokeWidth={1.5} />
            <span>{resource.address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Phone className="w-4 h-4 flex-shrink-0 text-neutral-400" strokeWidth={1.5} />
            <span>{resource.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Clock className="w-4 h-4 flex-shrink-0 text-neutral-400" strokeWidth={1.5} />
            <span>{resource.hours}</span>
          </div>
          <div className="pt-4">
            <Button 
              variant="ghost" 
              className="w-full justify-between group-hover:bg-neutral-50 text-neutral-900"
            >
              View details
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}