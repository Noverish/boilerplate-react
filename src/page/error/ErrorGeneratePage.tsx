import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ErrorGeneratePage() {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error('Generated Error');
  }

  const generateError = () => {
    setError(true);
  }

  return (
    <div className="ErrorGeneratePage w-100 h-100 d-flex align-items-center justify-content-center">
      <Button onClick={generateError}>Generate Error</Button>
    </div>
  )
}
