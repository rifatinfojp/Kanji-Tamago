import React, { useRef, useState, useEffect } from 'react';
import { Eraser, Eye, EyeOff, RotateCcw } from 'lucide-react';

interface StrokeCanvasProps {
  kanji: string;
}

export const StrokeCanvas: React.FC<StrokeCanvasProps> = ({ kanji }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 280;
    canvas.height = 280;
    clearCanvas();
  }, [kanji]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.beginPath();
  };

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#2563eb'; // Japanese blue stroke

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  return (
    <div className="flex flex-col items-center bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between w-full mb-3 px-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          অনুশীলন ক্যানভাস (Writing Canvas)
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="p-1.5 text-xs flex items-center gap-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition"
            title={showGuide ? 'গাইড বন্ধ করুন' : 'গাইড দেখুন'}
          >
            {showGuide ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showGuide ? 'গাইড লুকান' : 'গাইড দেখান'}</span>
          </button>
          <button
            onClick={clearCanvas}
            className="p-1.5 text-xs flex items-center gap-1 rounded-lg bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 hover:bg-rose-100 transition"
            title="মুছে ফেলুন"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>মুছুন</span>
          </button>
        </div>
      </div>

      <div className="relative w-[280px] h-[280px] bg-white dark:bg-slate-950 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 overflow-hidden shadow-inner flex items-center justify-center">
        {/* Kanji Guideline Grid */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-2 grid-rows-2">
          <div className="border-r border-b border-dashed border-slate-200 dark:border-slate-800"></div>
          <div className="border-b border-dashed border-slate-200 dark:border-slate-800"></div>
          <div className="border-r border-dashed border-slate-200 dark:border-slate-800"></div>
          <div></div>
        </div>

        {/* Kanji Ghost Guide */}
        {showGuide && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="text-[170px] font-japanese font-extralight text-slate-200 dark:text-slate-800 opacity-60 leading-none">
              {kanji}
            </span>
          </div>
        )}

        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onMouseMove={draw}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={draw}
          className="absolute inset-0 cursor-crosshair touch-none z-10"
        />
      </div>

      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 text-center">
        মাউস বা আঙুল দিয়ে কান্জির রেখা ট্রেস করুন
      </p>
    </div>
  );
};
