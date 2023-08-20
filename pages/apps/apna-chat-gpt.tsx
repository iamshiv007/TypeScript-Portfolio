import React, { ChangeEvent, Fragment, KeyboardEvent, useState } from "react";
import Head from "next/head";
import axios, { AxiosError } from "axios";

import Theme from "../../utils/Theme";
import BackTo from "../../components/buttons/BackTo";

interface History {
  question: string;
  answer: string;
}

const ApnaChatGpt: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [questionPreview, setQuestionPreview] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [history, setHistory] = useState<History[]>([]);

  const enterHit = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      generateAnswer();
    }
  };

  const generateAnswer = async () => {
    try {
      setLoading(true);
      setQuestionPreview(question);
      setQuestion("");
      setAnswer("");
      const { data } = await axios.post(`/api/chatgpt?query=${question}`);
      if (!data.success) {
        alert(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setAnswer(data.answer);
      setHistory([{ question, answer: data.answer }, ...history]);
      console.log(data.answer);
    } catch (error: AxiosError | any) {
      console.log(error);
      alert(error?.response?.data?.message || error);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Apna-Chat-Gpt</title>
      </Head>

      <Theme>
        <BackTo backTo={""} />

        <div className="dark:bg-gray-900 min-h-[92vh]">
          <h1 className="text-3xl font-bold text-center pt-5">Apna-Chat-Gpt</h1>
          <div className="w-[92%] sm:w-[50%] m-auto mt-6">
            <div className="inputWrapper flex justify-around">
              <input
                className="dark:bg-black p-3 py-1.5 rounded text-lg block w-[100%] border border-solid border-gray-500 dark:border-white"
                id="question"
                name="question"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setQuestion(e.target.value)
                }
                onKeyDown={enterHit}
                placeholder="Ask any question..."
                type="text"
                value={question}
              />
            </div>

            <div className="mt-8 pb-5">
              {questionPreview && (
                <div>
                  {" "}
                  <p>Q. {questionPreview}</p>
                  <p>{loading ? "Generating..." : "Ans => " + answer}</p>
                </div>
              )}

              {answer !== ""
                ? history
                    .filter((data: History, key: number) => key !== 0)
                    .map((data: History, key: number) => (
                      <div className="mt-5" key={key}>
                        <p>{"Q. " + data.question}</p>
                        <div>{"Ans => " + data.answer}</div>
                      </div>
                    ))
                : history.map((data: History, key: number) => (
                    <div className="mt-5" key={key}>
                      <p>{"Q. " + data.question}</p>
                      <div>{"Ans => " + data.answer}</div>
                    </div>
                  ))}
            </div>
          </div>

          <div className="sm:hidden flex justify-center w-[100%] fixed bottom-10">
            <button
              className="p-2 px-5 dark:bg-[#286969] bg-[#c72c6c] font-bold text-white rounded sm:ml-5"
              onClick={generateAnswer}
            >
              Generate
            </button>
          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default ApnaChatGpt;
