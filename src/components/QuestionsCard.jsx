import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  CircleChevronLeft,
  CircleChevronRight,
  SeparatorVertical,
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
const questions = [
  { question: "livelihood", answer: "जीवनयापन" },
  { question: "business", answer: "यबसाय/व्यापार" },
  { question: "food business", answer: "खाद्य ब्यबसाय" },
  { question: "popular", answer: "लोकप्रिय" },
];
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const QuestionsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const sanitizedQuestions = questions.map((q) => ({
    question: q.question.trim(),
    answer: q.answer.trim(),
  }));

  const capitalizeFirst = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < sanitizedQuestions.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Vocabulary Builder</h1>

      <div className="flex flex-col gap-5">
        <div className="flex  items-center space-x-2">
          <Switch
            checked={clicked}
            onCheckedChange={(checked) => setClicked(checked)}
            id="learning-mode"
          />
          <Label htmlFor="learning-mode">Learning Mode</Label>
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="apple">Legal Services</SelectItem>
              <SelectItem value="banana">Holiday</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 w-full">
        {" "}
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <p className="text-lg font-semibold ">
                      {capitalizeFirst(
                        sanitizedQuestions[currentIndex].question
                      )}
                    </p>
                  </CardHeader>

                  <CardContent className="flex aspect-square items-center justify-center p-6 h-26">
                    <AnimatePresence mode="wait">
                      {clicked ? (
                        <motion.div
                          key="question"
                          initial={{ rotateY: 90, opacity: 0 }}
                          animate={{ rotateY: 0, opacity: 1 }}
                          exit={{ rotateY: -90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Button onClick={() => setClicked(false)}>
                            Show answer
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.p
                          key="answer"
                          className="text-3xl font-bold"
                          initial={{ rotateY: 90, opacity: 0 }}
                          animate={{ rotateY: 0, opacity: 1 }}
                          exit={{ rotateY: -90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {sanitizedQuestions[currentIndex].answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="flex justify-between w-full max-w-xs px-4">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <CircleChevronLeft className="h-5 w-5 mr-2" />
            Prev
          </Button>
          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentIndex === sanitizedQuestions.length - 1}
          >
            Next
            <CircleChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Slide {currentIndex + 1} of {sanitizedQuestions.length}
        </p>
      </div>
    </div>
  );
};

export default QuestionsCard;
