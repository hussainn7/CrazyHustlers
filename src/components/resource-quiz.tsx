import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { CheckCircle2, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import { Progress } from './ui/progress';
import { ResourceCard } from './resource-card';
import { motion } from 'motion/react';

const quizQuestions = [
  {
    id: 1,
    question: 'What type of support are you looking for?',
    options: [
      { value: 'health', label: 'Healthcare Services', category: 'health' },
      { value: 'food', label: 'Food & Nutrition', category: 'food' },
      { value: 'housing', label: 'Housing Assistance', category: 'housing' },
      { value: 'employment', label: 'Job & Career Help', category: 'employment' },
      { value: 'education', label: 'Education & Training', category: 'education' },
      { value: 'other', label: 'Other Services', category: null },
    ],
  },
  {
    id: 2,
    question: 'Is this for yourself or someone else?',
    options: [
      { value: 'self', label: 'For myself' },
      { value: 'family', label: 'For a family member' },
      { value: 'friend', label: 'For a friend or neighbor' },
    ],
  },
  {
    id: 3,
    question: 'How urgent is your need?',
    options: [
      { value: 'immediate', label: 'Immediate - Need help today' },
      { value: 'soon', label: 'Within the next week' },
      { value: 'planning', label: 'Planning ahead' },
    ],
  },
  {
    id: 4,
    question: 'Do you have transportation to get to services?',
    options: [
      { value: 'yes', label: 'Yes, I have reliable transportation' },
      { value: 'sometimes', label: 'Sometimes, but not always' },
      { value: 'no', label: 'No, I need help with transportation' },
    ],
  },
];

const mockRecommendations = [
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
];

export function ResourceQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [quizQuestions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const currentAnswer = answers[quizQuestions[currentQuestion]?.id];

  if (showResults) {
    return (
      <section className="py-12 min-h-screen relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="mb-12 bg-white border-neutral-200">
              <CardHeader className="text-center pb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, type: 'spring' }}
                  className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={1.5} />
                </motion.div>
                <CardTitle className="text-3xl text-neutral-900 mb-2">Your matches</CardTitle>
                <CardDescription className="text-neutral-500">
                  Based on your answers, here are the best resources for you
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockRecommendations.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Button 
              onClick={handleRestart} 
              variant="outline" 
              className="gap-2 border-neutral-300 text-neutral-900 hover:bg-neutral-100 rounded-full"
            >
              <RotateCcw className="w-4 h-4" strokeWidth={1.5} />
              Retake quiz
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 min-h-screen relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-neutral-900 mb-2 text-5xl tracking-tight">
            Find your match
          </h2>
          <p className="text-neutral-500">
            Answer a few questions to discover the best resources for your needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-white border-neutral-200">
            <CardHeader>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-2">
                  <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-1.5 bg-neutral-100" />
              </div>
              <CardTitle className="text-2xl text-neutral-900">{quizQuestions[currentQuestion].question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={currentAnswer} onValueChange={handleAnswer}>
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <motion.div
                      key={option.value}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 2 }}
                    >
                      <div
                        className={`flex items-center space-x-3 border rounded-xl p-4 cursor-pointer transition-all ${
                          currentAnswer === option.value
                            ? 'border-neutral-900 bg-neutral-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <RadioGroupItem value={option.value} id={option.value} className="border-neutral-300" />
                        <Label
                          htmlFor={option.value}
                          className="flex-1 cursor-pointer text-neutral-900"
                        >
                          {option.label}
                        </Label>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>

              <div className="flex items-center justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className="gap-2 border-neutral-300 text-neutral-900 hover:bg-neutral-100 rounded-full disabled:opacity-30"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  className="gap-2 bg-neutral-900 hover:bg-neutral-800 rounded-full disabled:opacity-30"
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'See results' : 'Next'}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}