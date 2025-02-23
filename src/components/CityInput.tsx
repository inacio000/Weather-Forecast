import React, { useState } from "react";
import { Button, Input } from "../styles";

interface CityInputProps {
  onSearch: (city: string) => void;
}

const CityInput: React.FC<CityInputProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city);

    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name in English"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default CityInput;
