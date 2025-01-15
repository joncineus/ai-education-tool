import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Palette, Code, MessageCircle, Video, Camera, TrendingUp, 
  PenTool, DollarSign, Microscope, Globe, ChevronRight, 
  Users, BookOpen 
} from 'lucide-react';

const CategoryCard = ({ category, index, isHovered, onHover }) => {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/courses/`}
        className="block"
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
      >
        <motion.div
          className={`
            relative overflow-hidden rounded-2xl bg-white p-8
            hover:bg-gradient-to-br hover:from-white hover:to-gray-50
            border border-gray-100
          `}
          whileHover={{ 
            y: -8,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Animated Border Gradient */}
          <motion.div
            className={`absolute inset-0 opacity-0`}
            initial={false}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              background: `linear-gradient(90deg, ${category.gradientFrom}, ${category.gradientTo})`
            }}
            transition={{ duration: 0.3 }}
            style={{ mixBlendMode: 'overlay' }}
          />

          <div className="relative z-10">
            {/* Icon Container */}
            <motion.div
              className={`
                w-20 h-20 rounded-2xl ${category.color} text-white
                flex items-center justify-center mb-6
                shadow-lg
              `}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon size={36} strokeWidth={1.5} />
            </motion.div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">
                {category.name}
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-2" />
                  <span>{category.count} Courses</span>
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-2" />
                  <span>{category.students}</span>
                </div>
              </div>

              <motion.p
                className="text-gray-600 text-sm leading-relaxed"
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  height: isHovered ? 'auto' : 0
                }}
                transition={{ duration: 0.2 }}
              >
                {category.description}
              </motion.p>

              {/* Explore Button */}
              <motion.div
                className="inline-flex items-center text-sm font-semibold"
                style={{ color: category.buttonColor }}
                whileHover={{ x: 5 }}
              >
                Explore Category
                <ChevronRight size={16} className="ml-1" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { 
      name: 'Art & Design',
      count: 33,
      icon: Palette,
      color: 'bg-pink-500',
      buttonColor: '#EC4899',
      gradientFrom: '#FED7E2',
      gradientTo: '#FDF2F8',
      description: 'Explore creative design techniques and principles',
      students: '12.5k'
    },
    { 
      name: 'Development', 
      count: 38, 
      icon: Code,
      color: 'bg-blue-500',
      buttonColor: '#3B82F6',
      gradientFrom: '#DBEAFE',
      gradientTo: '#EFF6FF',
      description: 'Learn programming and web development',
      students: '15.2k'
    },
    { 
      name: 'Communication', 
      count: 38, 
      icon: MessageCircle,
      color: 'bg-purple-500',
      buttonColor: '#8B5CF6',
      gradientFrom: '#EDE9FE',
      gradientTo: '#F3E8FF',
      description: 'Master public speaking and interpersonal skills',
      students: '8.7k'
    },
    { 
      name: 'Videography', 
      count: 33, 
      icon: Video,
      color: 'bg-red-500',
      buttonColor: '#EF4444',
      gradientFrom: '#FEE2E2',
      gradientTo: '#FEF2F2',
      description: 'Create professional video content',
      students: '10.1k'
    },
    { 
      name: 'Photography', 
      count: 33, 
      icon: Camera,
      color: 'bg-indigo-500',
      buttonColor: '#6366F1',
      gradientFrom: '#E0E7FF',
      gradientTo: '#EEF2FF',
      description: 'Master digital photography techniques',
      students: '9.3k'
    },
    { 
      name: 'Marketing', 
      count: 38, 
      icon: TrendingUp,
      color: 'bg-green-500',
      buttonColor: '#10B981',
      gradientFrom: '#D1FAE5',
      gradientTo: '#ECFDF5',
      description: 'Learn digital marketing strategies',
      students: '14.8k'
    },
    { 
      name: 'Content Writing', 
      count: 38, 
      icon: PenTool,
      color: 'bg-yellow-500',
      buttonColor: '#F59E0B',
      gradientFrom: '#FEF3C7',
      gradientTo: '#FFFBEB',
      description: 'Develop professional writing skills',
      students: '7.9k'
    },
    { 
      name: 'Finance', 
      count: 30, 
      icon: DollarSign,
      color: 'bg-emerald-500',
      buttonColor: '#059669',
      gradientFrom: '#D1FAE5',
      gradientTo: '#ECFDF5',
      description: 'Understanding money management',
      students: '11.2k'
    },
    { 
      name: 'Science', 
      count: 30, 
      icon: Microscope,
      color: 'bg-cyan-500',
      buttonColor: '#06B6D4',
      gradientFrom: '#CFFAFE',
      gradientTo: '#ECFEFF',
      description: 'Explore scientific concepts and theories',
      students: '6.5k'
    },
    { 
      name: 'Network', 
      count: 35, 
      icon: Globe,
      color: 'bg-orange-500',
      buttonColor: '#F97316',
      gradientFrom: '#FFEDD5',
      gradientTo: '#FFF7ED',
      description: 'Learn networking and infrastructure',
      students: '8.4k'
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Explore Top Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular learning paths and join thousands of students advancing their careers
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Categories;
