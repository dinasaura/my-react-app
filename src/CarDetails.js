import React, { useRef, useEffect } from 'react';

function CarDetails({ initialData }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [initialData]);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const carDetails = {
      model: formData.get('model'),
      year: formData.get('year'),
      color: formData.get('color')
    };
    console.log('Car Details:', carDetails);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>Model:</label>
        <input type="text" name="model" defaultValue={initialData.model} />
      </div>
      <div>
        <label>Year:</label>
        <input type="number" name="year" defaultValue={initialData.year} />
      </div>
      <div>
        <label>Color:</label>
        <input type="text" name="color" defaultValue={initialData.color} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CarDetails;
