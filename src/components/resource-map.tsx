import { useState } from 'react';
import { MapPin, Filter, List, Map as MapIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

const mapLocations = [
  { id: '1', name: 'City Community Health Center', category: 'health', x: 35, y: 45 },
  { id: '2', name: 'Downtown Food Bank', category: 'food', x: 60, y: 30 },
  { id: '3', name: 'Career Development Center', category: 'employment', x: 25, y: 65 },
  { id: '4', name: 'Family Housing Resources', category: 'housing', x: 70, y: 55 },
  { id: '5', name: 'Adult Learning Center', category: 'education', x: 45, y: 70 },
  { id: '6', name: 'Mental Wellness Clinic', category: 'mental-health', x: 80, y: 40 },
  { id: '7', name: 'Legal Aid Society', category: 'legal', x: 50, y: 25 },
  { id: '8', name: 'Youth & Family Services', category: 'family', x: 20, y: 35 },
];

export function ResourceMap() {
  const [selectedLocation, setSelectedLocation] = useState<typeof mapLocations[0] | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  return (
    <section className="py-12 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <div>
              <h2 className="text-neutral-900 mb-2 text-5xl tracking-tight">
                Explore the map
              </h2>
              <p className="text-neutral-500">
                Find resources near you
              </p>
            </div>
            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={viewMode === 'map' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('map')}
                  className={`gap-2 rounded-full ${
                    viewMode === 'map'
                      ? 'bg-neutral-900 hover:bg-neutral-800'
                      : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <MapIcon className="w-4 h-4" strokeWidth={1.5} />
                  Map
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`gap-2 rounded-full ${
                    viewMode === 'list'
                      ? 'bg-neutral-900 hover:bg-neutral-800'
                      : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <List className="w-4 h-4" strokeWidth={1.5} />
                  List
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {viewMode === 'map' ? (
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Map Display */}
            <div className="lg:col-span-2">
              <Card className="h-[600px] overflow-hidden bg-white border-neutral-200">
                <div className="relative w-full h-full bg-neutral-50">
                  {/* Map Grid */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(10)].map((_, i) => (
                      <div key={`h-${i}`} className="absolute w-full h-px bg-neutral-300" style={{ top: `${i * 10}%` }} />
                    ))}
                    {[...Array(10)].map((_, i) => (
                      <div key={`v-${i}`} className="absolute h-full w-px bg-neutral-300" style={{ left: `${i * 10}%` }} />
                    ))}
                  </div>

                  {/* Location Markers */}
                  {mapLocations.map((location, index) => (
                    <motion.button
                      key={location.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group/marker z-10"
                      style={{ left: `${location.x}%`, top: `${location.y}%` }}
                      onClick={() => setSelectedLocation(location)}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <motion.div 
                        className={`w-3 h-3 bg-neutral-900 rounded-full shadow-lg relative ${
                          selectedLocation?.id === location.id ? 'ring-4 ring-neutral-300' : ''
                        }`}
                      />
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-1 rounded-lg shadow-xl opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap text-xs pointer-events-none">
                        {location.name}
                      </div>
                    </motion.button>
                  ))}

                  {/* Map Legend */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-sm p-3 border border-neutral-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Filter className="w-3.5 h-3.5 text-neutral-600" strokeWidth={1.5} />
                      <span className="text-xs text-neutral-900">Legend</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <div className="w-2 h-2 bg-neutral-900 rounded-full" />
                      <span>Resources</span>
                    </div>
                  </div>

                  {/* Your Location */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-sm px-3 py-2 flex items-center gap-2 border border-neutral-200">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-xs text-neutral-700">Your location</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Selected Location Details */}
            <div className="lg:col-span-1">
              {selectedLocation ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-white border-neutral-200">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2 bg-neutral-100 text-neutral-600 border-0">
                        {selectedLocation.category.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </Badge>
                      <CardTitle className="text-neutral-900">{selectedLocation.name}</CardTitle>
                      <CardDescription className="text-neutral-500">
                        Selected resource details
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm text-neutral-600">
                        <p>
                          View full details about this resource and get directions.
                        </p>
                        <div className="pt-4 space-y-2">
                          <Button className="w-full bg-neutral-900 hover:bg-neutral-800">
                            Get directions
                          </Button>
                          <Button variant="outline" className="w-full border-neutral-300 text-neutral-900 hover:bg-neutral-100">
                            View details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <Card className="h-full flex items-center justify-center bg-white border-neutral-200">
                  <CardContent className="text-center py-12">
                    <MapPin className="w-8 h-8 text-neutral-300 mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-sm text-neutral-500">
                      Select a location
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {mapLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ x: 4 }}
              >
                <Card className="cursor-pointer hover:shadow-lg transition-all bg-white border-neutral-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="secondary" className="mb-2 bg-neutral-100 text-neutral-600 border-0">
                          {location.category.split('-').map(word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                          ).join(' ')}
                        </Badge>
                        <CardTitle className="text-neutral-900">{location.name}</CardTitle>
                      </div>
                      <Button variant="ghost" size="sm" className="text-neutral-600">
                        View
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}