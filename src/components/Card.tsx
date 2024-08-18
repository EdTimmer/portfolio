import { useState, useEffect } from "react";
import { CardContainer, CardTitle, ImageContainer, CardImage, WebLink, LinksRow } from "./Card.styles";
// import require from "node:module";

interface CardProps {
  title: string;
  imageName: string;
  web: string;
  code: string;
}

function Card({ title, imageName, web, code }: CardProps) {
  // const imagePath = require(`../assets/images/${imageName}.png`);

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
      const loadImage = async () => {
          try {
              const image = await import(`../assets/images/${imageName}.png`);
              setImageSrc(image.default);
          } catch (error) {
              console.error('Error loading image:', error);
          }
      };
      loadImage();
  }, [imageName]);

  if (!imageSrc) return <div>Loading...</div>;
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>

      <ImageContainer>
        <CardImage src={imageSrc} alt="project snapshot" />
      </ImageContainer>

      <LinksRow>
        <WebLink href={web} target="_blank" rel="noopener noreferrer">
          website
        </WebLink>

        <WebLink href={code} target="_blank" rel="noopener noreferrer">
          code
        </WebLink>
      </LinksRow>


    </CardContainer>
  );
}

export default Card;