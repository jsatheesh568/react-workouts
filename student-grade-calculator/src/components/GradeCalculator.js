import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const GradeCalculator = () => {
  const [marks, setMarks] = useState(Array(5).fill(''));
  const [averageGrade, setAverageGrade] = useState('');
  const [error, setError] = useState('');

  const handleCalculate = () => {
    const isValid = marks.every(mark => mark >= 0 && mark <= 100);
    if (!isValid) {
      setError('Marks should be between 0 and 100');
      return;
    }

    let hasFailGrade = false;
    const totalMarks = marks.reduce((total, mark) => {
      const markValue = parseFloat(mark);
      if (markValue < 35) {
        hasFailGrade = true;
      }
      return total + markValue;
    }, 0);
    const averageMarks = totalMarks / 5;

    if (hasFailGrade) {
      setAverageGrade(<span style={{ color: 'red' }}>F</span>);
    } else if (averageMarks >= 0 && averageMarks <= 100) {
      if (averageMarks >= 90) {
        setAverageGrade(<span style={{ color: 'green' }}>A</span>);
      } else if (averageMarks >= 80) {
        setAverageGrade(<span style={{ color: 'blue' }}>B</span>);
      } else if (averageMarks >= 70) {
        setAverageGrade(<span style={{ color: 'orange' }}>C</span>);
      } else if (averageMarks >= 60) {
        setAverageGrade(<span style={{ color: 'purple' }}>D</span>);
      } else {
        setAverageGrade(<span style={{ color: 'red' }}>F</span>);
      }
      setError('');
    } else {
      setError('Average marks should be between 0 and 100');
    }
  };

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12}>
      <center><h2 style={{ color: 'red' }}>Grade Calculator</h2></center>
      </Grid>
      {[...Array(5)].map((_, index) => (
        <Grid item xs={12} key={index}>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            label={`Enter marks for Subject ${index + 1}`}
            value={marks[index]}
            onChange={(e) => {
              const newMarks = [...marks];
              newMarks[index] = e.target.value;
              setMarks(newMarks);
            }}
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCalculate}
          fullWidth
        >
          Calculate Average Grade
        </Button>
      </Grid>
      <Grid item xs={12}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {averageGrade && <p>Final Grade: {averageGrade}</p>}
      </Grid>
    </Grid>
  );
};

export default GradeCalculator;
