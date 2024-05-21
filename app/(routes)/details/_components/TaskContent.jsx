"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function TaskContent({ content }) {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    if (content && content.images) {
      const timer = setTimeout(() => setShowImages(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [content]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-4 m-3">
      <h2 className="font-bold text-lg">About</h2>
      <p className="mt-2">{content.about || "Loading data"}</p>

      <h2 className="font-bold text-lg my-3">Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 shadow-lg p-3 rounded-lg">
        {showImages ? (
          content.images && content.images.length > 0 ? (
            content.images.map((image, index) => (
              <Image
                src={image.url}
                alt={`Task image ${index + 1}`}
                width={700}
                height={200}
                key={index}
                className="rounded-lg hover:scale-95 transition-all cursor-pointer"
              />
            ))
          ) : (
            <p>No images available.</p>
          )
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </div>
  );
}

export default TaskContent;
