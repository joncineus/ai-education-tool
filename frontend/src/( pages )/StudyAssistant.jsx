import React from "react";
import SearchBar from "../( components )/StudyAssistantSearchBar";
import ContentList from "../( components )/ContentList";

const StudyAssistant = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="justify-center mx-auto">
        <SearchBar />
        <ContentList />
      </main>
    </div>
  );
};

export default StudyAssistant;
