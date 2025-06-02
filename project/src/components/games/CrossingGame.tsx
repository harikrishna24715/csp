import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const CrossingGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine>();
  
  useEffect(() => {
    // Ensure canvas exists and is properly sized
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set explicit dimensions on the canvas element
    canvas.width = 800;
    canvas.height = 600;

    // Create engine after ensuring canvas is ready
    const engine = Matter.Engine.create();
    engineRef.current = engine;

    // Create render with explicit context
    const render = Matter.Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: canvas.width,
        height: canvas.height,
        wireframes: false,
        background: '#f0f9ff'
      }
    });

    // Verify render context exists before proceeding
    if (!render.context) {
      console.error('Failed to get canvas context');
      return;
    }

    // Create ground (road)
    const ground = Matter.Bodies.rectangle(400, 580, 800, 40, {
      isStatic: true,
      render: {
        fillStyle: '#94a3b8'
      }
    });

    // Create zebra crossing
    const zebraCrossing = Matter.Bodies.rectangle(400, 580, 120, 40, {
      isStatic: true,
      render: {
        fillStyle: '#ffffff'
      }
    });

    // Create player
    const player = Matter.Bodies.rectangle(100, 540, 30, 30, {
      render: {
        fillStyle: '#3b82f6'
      }
    });

    // Create traffic light
    const trafficLight = Matter.Bodies.rectangle(400, 100, 20, 60, {
      isStatic: true,
      render: {
        fillStyle: '#ef4444'
      }
    });

    // Create cars
    const cars = Array(3).fill(null).map((_, i) => 
      Matter.Bodies.rectangle(800 + (i * 300), 540, 60, 30, {
        render: {
          fillStyle: '#ef4444'
        }
      })
    );

    // Add all bodies to the world
    Matter.World.add(engine.world, [ground, zebraCrossing, player, trafficLight, ...cars]);

    // Start the engine and renderer
    Matter.Engine.run(engine);
    Matter.Render.run(render);

    // Controls
    const handleKeyDown = (event: KeyboardEvent) => {
      const force = 0.004;
      switch(event.key) {
        case 'ArrowLeft':
          Matter.Body.applyForce(player, player.position, { x: -force, y: 0 });
          break;
        case 'ArrowRight':
          Matter.Body.applyForce(player, player.position, { x: force, y: 0 });
          break;
        case 'ArrowUp':
          if (Math.abs(player.velocity.y) < 0.1) {
            Matter.Body.applyForce(player, player.position, { x: 0, y: -0.05 });
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      Matter.Engine.clear(engine);
      Matter.Render.stop(render);
      if (render.canvas) {
        render.canvas.remove();
        render.canvas = null as any;
        render.context = null as any;
        render.textures = {};
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-blue-100 p-4 rounded-lg text-blue-800">
        <p className="font-medium">How to Play:</p>
        <ul className="list-disc list-inside">
          <li>Use arrow keys to move</li>
          <li>Cross at the zebra crossing</li>
          <li>Wait for the traffic light to turn green</li>
          <li>Avoid cars</li>
        </ul>
      </div>
      <canvas 
        ref={canvasRef}
        className="border border-gray-200 rounded-lg"
        width="800"
        height="600"
      />
    </div>
  );
};

export default CrossingGame;