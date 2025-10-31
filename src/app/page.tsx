"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui";
import {
  ImageCreator,
  ImageAnalysis,
  IngredientRecognition,
} from "@/components/main";
import { GeminiChat } from "@/components/main";
import Header from "@/components/main/Header";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center m-auto">
      <Header />
      <div className="sm:w-145 w-full mt-6 px-3 sm:p-0">
        <Tabs defaultValue="Image analysis" className="sm:w-105 w-full gap-6">
          <TabsList className="w-full p-1 flex flex-wrap h-full">
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
          <div className="absolute right-9 bottom-9">
            <GeminiChat />
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default HomePage;
