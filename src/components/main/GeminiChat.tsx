import React from "react";
import { useState } from "react";
import { Button, TabsContent } from "@/components/ui";
import { LuMessageCircle } from "react-icons/lu";

export const GeminiChat = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [text, setText] = useState<string>("");

  const generateTextToText = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/generate-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      console.log(data, "TEXT");
      if (data.text) {
        setText(data.text);
      } else {
        ("Failed to generate text to text");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Failed to generate text to text");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!open && (
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="bg-black w-12 h-12 rounded-full flex items-center justify-center"
        >
          <LuMessageCircle className="w-4 h-4 text-white" />
        </Button>
      )}
      {open && (
        <div className="w-145">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="text-xl leading-7 font-semibold text-foreground">
                  AI chat
                </div>
                <Button onClick={() => setOpen(false)}>X</Button>
                <Button type="button" variant={"outline"} className="w-12 h-10">
                  {/* <RxReload size={16} /> */}
                </Button>
              </div>

              <div className="text-sm leading-5 text-muted-foreground">
                What do you want to ask? Ask anything you want.
              </div>

              <form
                onSubmit={generateTextToText}
                className="w-full flex flex-col gap-2"
              >
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter your prompt..."
                  className="w-full px-3 py-2 border border-input rounded-md text-sm leading-5 text-primary"
                />

                <Button
                  type="submit"
                  disabled={loading || !prompt}
                  className="w-full"
                >
                  {loading ? "Generating ..." : "Generate Chat"}
                </Button>
              </form>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xl leading-7 font-semibold text-foreground">
                Identified texts
              </div>
              {text ? (
                <div>{text}</div>
              ) : (
                <div className="text-sm leading-6 text-muted-foreground">
                  First, enter your text to recognize an texts.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
