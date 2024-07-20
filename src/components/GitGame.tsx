import { useState } from "react";
import tasks from "./Tasks";
import { motion } from "framer-motion";

const Game = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim() === tasks[currentTask].command) {
      setScore(score + 1);
      setShowHint(false);
      setInputValue("");
      setCurrentTask(currentTask + 1);
    } else {
      setShowHint(true);
    }
  };

  const handleRestart = () => {
    setCurrentTask(0);
    setInputValue("");
    setScore(0);
    setShowHint(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ background: "linear-gradient(45deg, #3f0035, #001a9e)" }}
    >
      <motion.header
        className="text-2xl sm:text-3xl text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl font-bold pb-2 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="text-white">Git Wars:</span> Battle for the
          Repository
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <span className="text-white">
            Fight, Conquer, and Control the Repository!
          </span>
        </motion.p>
      </motion.header>
      <div className="bg-[#121212] rounded-lg p-6 sm:p-8 shadow-lg my-4 md:my-6 lg:my-8">
        <>
          {currentTask < tasks.length ? (
            <>
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-4 text-[#ff6a05]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Task {currentTask + 1}
              </motion.h2>
              <motion.p
                className="text-gray-300 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {tasks[currentTask].scenario}
              </motion.p>
              {showHint && (
                <motion.p
                  className="text-red-500 text-sm mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Hint: {tasks[currentTask].hint}
                </motion.p>
              )}
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter Git command"
                  className="w-full py-2 px-3 sm:px-4 rounded-md bg-gray-100 text-gray-800 mb-3 sm:mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
                <motion.button
                  type="submit"
                  className="w-full py-2 px-3 sm:px-4 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </form>
            </>
          ) : (
            <>
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-4 text-[#ff6a05]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {score === tasks.length
                  ? "Congratulations! You won the game!"
                  : "Game Over!"}
              </motion.h2>
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Your score: {score}/{tasks.length}
              </motion.p>
              <button
                onClick={handleRestart}
                className="w-full py-2 px-3 mt-4 sm:px-4 sm:mt-5 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Restart
              </button>
            </>
          )}
        </>
      </div>
      <motion.footer
        className="fixed py-4 text-center px-2 bottom-0 text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        &copy; {new Date().getFullYear()}, Designed & Build by{" "}
        <a
          href="https://www.abhivarde.in/"
          className=" text-white font-semibold"
        >
          AbhiVarde
        </a>
        .{" "}
      </motion.footer>
    </div>
  );
};

export default Game;
