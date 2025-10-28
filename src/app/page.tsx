"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui";
import {
  ImageCreator,
  ImageAnalysis,
  IngredientRecognition,
} from "@/components/main";
import { GeminiChat } from "@/components/main";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center m-auto">
      <div className="w-145 mt-6">
        <Tabs defaultValue="Image analysis" className="w-105 gap-6">
          <TabsList className="w-full p-1">
            <TabsTrigger value="Image analysis">Image analysis</TabsTrigger>
            <TabsTrigger value="Ingredient recognition">
              Ingredient recognition
            </TabsTrigger>
            <TabsTrigger value="Image creator">Image creator</TabsTrigger>
          </TabsList>

          <div>
            <ImageAnalysis />

            <IngredientRecognition />

            <ImageCreator />
          </div>
          <div>
            <GeminiChat />
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default HomePage;
