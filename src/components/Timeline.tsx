import React, { useState, useRef, useEffect } from 'react';
import './Timeline.css';

interface TimelineProps {
  currentYear: number;
  onYearChange: (year: number) => void;
  minYear: number;
  maxYear: number;
  onIndependenceYear?: (year: number) => void;
  independenceEvents?: Array<{ year: number; country: string; description: string }>;
  onStopFlickering?: () => void;
}

const Timeline: React.FC<TimelineProps> = ({ currentYear, onYearChange, minYear, maxYear, onIndependenceYear, independenceEvents = [], onStopFlickering }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1000);
  const playIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentYearRef = useRef(currentYear);

  // Update the ref whenever currentYear changes
  useEffect(() => {
    currentYearRef.current = currentYear;
  }, [currentYear]);

  // Track previous year to detect when we move to a new year
  const [previousYear, setPreviousYear] = useState(currentYear);

  // Simple independence detection - only when year changes while playing
  useEffect(() => {
    console.log('Independence effect running, isPlaying:', isPlaying, 'currentYear:', currentYear, 'previousYear:', previousYear);
    if (!isPlaying) return;
    
    // Only check for independence when moving to a new year
    if (currentYear !== previousYear) {
      const countriesGainingIndependence = independenceEvents.filter(event => event.year === currentYear);
      console.log('Countries gaining independence:', countriesGainingIndependence);
      
      if (countriesGainingIndependence.length > 0) {
        console.log('Independence detected, stopping playback');
        // Stop simulation when independence happens
        stopPlayback();
        // Notify parent about independence
        if (onIndependenceYear) {
          onIndependenceYear(currentYear);
        }
      }
      setPreviousYear(currentYear);
    }
  }, [currentYear, independenceEvents, onIndependenceYear, isPlaying, previousYear]);

  const startPlayback = () => {
    console.log('startPlayback called, isPlaying:', isPlaying);
    setIsPlaying(true);
    // Stop flickering when user clicks resume
    if (onStopFlickering) {
      onStopFlickering();
    }
    playIntervalRef.current = setInterval(() => {
      const nextYear = currentYearRef.current + 1;
      console.log('Interval running, nextYear:', nextYear, 'maxYear:', maxYear);
      if (nextYear > maxYear) {
        stopPlayback();
        onYearChange(maxYear);
      } else {
        onYearChange(nextYear);
      }
    }, playbackSpeed);
  };

  const stopPlayback = () => {
    console.log('stopPlayback called');
    if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
      playIntervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    console.log('togglePlayback called, current isPlaying:', isPlaying);
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const resetToStart = () => {
    stopPlayback();
    onYearChange(minYear);
  };

  const fastForward = () => {
    stopPlayback();
    onYearChange(maxYear);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onYearChange(parseInt(event.target.value));
  };

  const handleYearInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(event.target.value);
    if (year >= minYear && year <= maxYear) {
      onYearChange(year);
    }
  };

  const formatYear = (year: number) => {
    return year.toString();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="timeline-container">
      <h3>Timeline: {formatYear(currentYear)}</h3>
      
      <div className="timeline-controls">
        <div className="timeline-slider">
          <input
            type="range"
            min={minYear}
            max={maxYear}
            value={currentYear}
            onChange={handleSliderChange}
            className="slider"
          />
        </div>
        
        <div className="year-input-container">
          <label htmlFor="year-input">Year:</label>
          <input
            id="year-input"
            type="number"
            value={currentYear}
            onChange={handleYearInputChange}
            min={minYear}
            max={maxYear}
            className="year-input"
          />
        </div>
        
        <div className="timeline-markers">
          <div className="timeline-marker">
            <span className="marker-year">1945</span>
            <span className="marker-label">Post-WWII</span>
          </div>
          <div className="timeline-marker">
            <span className="marker-year">1950s</span>
            <span className="marker-label">Early Independence</span>
          </div>
          <div className="timeline-marker">
            <span className="marker-year">1960s</span>
            <span className="marker-label">Independence Wave</span>
          </div>
          <div className="timeline-marker">
            <span className="marker-year">1970s</span>
            <span className="marker-label">Final Colonies</span>
          </div>
          <div className="timeline-marker">
            <span className="marker-year">1980</span>
            <span className="marker-label">End of Era</span>
          </div>
        </div>
      </div>
      
      <div className="playback-controls">
        <button 
          className={`play-button ${isPlaying ? 'playing' : 'paused'}`}
          onClick={togglePlayback}
        >
          {isPlaying ? '⏸ Pause' : '▶ Play Animation'}
        </button>
        
        <div className="speed-controls">
          <label htmlFor="speed-select">Speed:</label>
          <select 
            id="speed-select"
            className="speed-select"
            value={playbackSpeed}
            onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
          >
            <option value={2000}>Slow (2s/year)</option>
            <option value={1000}>Normal (1s/year)</option>
            <option value={500}>Fast (0.5s/year)</option>
          </select>
        </div>
        
        <div className="navigation-controls">
          <button className="reset-button" onClick={resetToStart}>
            <span>↺</span> Reset to 1945
          </button>
          <button className="fast-forward-button" onClick={fastForward}>
            <span>►►</span> End (1980)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
