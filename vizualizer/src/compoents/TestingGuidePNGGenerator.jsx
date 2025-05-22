import React, { useRef, useEffect, useState } from 'react';
import { testingTypes } from '../data/testingData.js';

const TestingGuidePNGGenerator = () => {
  const canvasRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);

  const roundRect = (ctx, x, y, width, height, radius, fill, stroke = null) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.stroke();
    }
  };

  const generateImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const width = 900;
    const height = 13000;
    canvas.width = width;
    canvas.height = height;

    // Fill background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Header
    const headerHeight = 80;
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(0, 0, width, headerHeight);

    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Software Testing Types: Complete Guide', width/2, 35);

    ctx.font = '14px Arial, sans-serif';
    ctx.fillText('21 Testing Types × 14 Comprehensive Fields | LinkedIn: @migueldiazmacedo', width/2, 60);

    let yPos = headerHeight + 20;

    // Draw each testing type as a card with internal table
    testingTypes.forEach((test, index) => {
      const cardMargin = 10;
      const cardWidth = width - (cardMargin * 2);
      const cardHeight = 580;
      
      // Card background
      ctx.fillStyle = '#f8fafc';
      roundRect(ctx, cardMargin, yPos, cardWidth, cardHeight, 8, '#f8fafc', '#e2e8f0');
      
      // Card header
      const headerY = yPos + 25;
      ctx.fillStyle = test.color;
      ctx.font = 'bold 18px Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(test.name, 30, headerY);
      
      // Priority badge
      const priorityColor = test.priority === 'Must Have' ? '#059669' : '#6b7280';
      roundRect(ctx, 750, yPos + 10, 120, 25, 12, priorityColor);
      ctx.fillStyle = 'white';
      ctx.font = 'bold 11px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(test.priority, 810, yPos + 27);
      
      // Table structure inside card
      const tableStartY = yPos + 60;
      const tableX = 30;
      const tableWidth = cardWidth - 60;
      const labelColumnWidth = 250;
      const valueColumnWidth = tableWidth - labelColumnWidth;
      const rowHeight = 35;
      
      // Table header
      ctx.fillStyle = '#e5e7eb';
      ctx.fillRect(tableX, tableStartY, tableWidth, 30);
      ctx.strokeStyle = '#d1d5db';
      ctx.lineWidth = 1;
      ctx.strokeRect(tableX, tableStartY, tableWidth, 30);
      
      ctx.fillStyle = '#374151';
      ctx.font = 'bold 12px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Field', tableX + labelColumnWidth/2, tableStartY + 20);
      ctx.fillText('Value', tableX + labelColumnWidth + valueColumnWidth/2, tableStartY + 20);
      
      // Table rows data
      const tableData = [
        { field: '1. Test Purpose', value: test.purpose },
        { field: '2. Tools for Testing', value: test.tools },
        { field: '3. Open-Source Tool Option', value: test.openSource },
        { field: '4. Owned By', value: test.owner },
        { field: '5. Process Step (App Lifecycle)', value: test.processStep },
        { field: '6. GitFlow Step', value: test.gitFlow },
        { field: '7. CI/CD Process', value: test.cicdProcess },
        { field: '8. CI/CD Trigger Event', value: test.cicdTrigger },
        { field: '9. Quality Gates', value: test.qualityGates },
        { field: '10. Priority', value: test.priority },
        { field: '11. Quality Gates on CI/CD Process', value: test.qualityGatesOnCICD },
        { field: '12. DevOps/Sec', value: test.devOpsSec },
        { field: '13. Additional Notes', value: test.additionalNotes },
        { field: '14. Testing Type Category', value: test.name }
      ];
      
      // Draw table rows
      tableData.forEach((row, rowIndex) => {
        const rowY = tableStartY + 30 + (rowIndex * rowHeight);
        
        // Alternating row colors
        const rowBg = rowIndex % 2 === 0 ? '#ffffff' : '#f9fafb';
        ctx.fillStyle = rowBg;
        ctx.fillRect(tableX, rowY, tableWidth, rowHeight);
        
        // Row borders
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 1;
        ctx.strokeRect(tableX, rowY, labelColumnWidth, rowHeight);
        ctx.strokeRect(tableX + labelColumnWidth, rowY, valueColumnWidth, rowHeight);
        
        // Field label (left column)
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 11px Arial, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(row.field, tableX + 10, rowY + 22);
        
        // Field value (right column) with text wrapping
        ctx.fillStyle = '#6b7280';
        ctx.font = '10px Arial, sans-serif';
        
        // Simple text wrapping for the value column
        const words = row.value.split(' ');
        let line = '';
        let valueY = rowY + 15;
        const maxValueWidth = valueColumnWidth - 20;
        
        for (let i = 0; i < words.length; i++) {
          const testLine = line + words[i] + ' ';
          const metrics = ctx.measureText(testLine);
          
          if (metrics.width > maxValueWidth && line !== '') {
            ctx.fillText(line.trim(), tableX + labelColumnWidth + 10, valueY);
            line = words[i] + ' ';
            valueY += 12;
            // Stop if we exceed row height
            if (valueY > rowY + rowHeight - 5) break;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line.trim(), tableX + labelColumnWidth + 10, valueY);
      });
      
      yPos += cardHeight + 20;
    });

    // Footer
    const footerY = yPos + 20;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, footerY, width, 60);

    ctx.fillStyle = 'white';
    ctx.font = 'bold 16px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Complete Software Testing Strategy Framework', width/2, footerY + 25);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Arial, sans-serif';
    ctx.fillText('From Development to Production - Modern Testing Practices', width/2, footerY + 45);

    // Watermark
    const watermarkY = footerY + 70;
    ctx.fillStyle = 'rgba(107, 114, 128, 0.4)';
    ctx.font = '10px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Created by Miguel Díaz Macedo | LinkedIn: https://www.linkedin.com/in/migueldiazmacedo/', width/2, watermarkY);

    // Convert to data URL
    try {
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      setImageUrl(dataUrl);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      alert('Canvas not found. Please regenerate the image first.');
      return;
    }

    try {
      const dataURL = canvas.toDataURL('image/png', 1.0);
      const downloadLink = document.createElement('a');
      downloadLink.href = dataURL;
      downloadLink.download = 'testing-guide-complete.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      console.log('Download initiated successfully');
    } catch (error) {
      console.error('Download failed:', error);
      alert('Automatic download failed. Please right-click on the image and select "Save image as..."');
    }
  };

  useEffect(() => {
    generateImage();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Complete Testing Guide - Table Layout
        </h1>
        <p className="text-gray-600">
          All 21 testing types in professional table format
        </p>
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-yellow-800 text-sm">
            <strong>Alternative Download Method:</strong> If the download button doesn't work, 
            right-click on the image above and select "Save image as..." to save it manually.
          </p>
        </div>
        
        <canvas
          ref={canvasRef}
          className="border border-gray-300 max-w-full h-auto cursor-pointer"
          style={{ maxHeight: '600px' }}
          title="Right-click to save image if download button doesn't work"
        />
        
        <div className="flex space-x-4">
          <button
            onClick={generateImage}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Regenerate Image
          </button>
          
          <button
            onClick={downloadImage}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Download PNG
          </button>
        </div>
        
        <div className="text-center text-sm text-gray-600 max-w-2xl">
          <p className="mb-2">
            <strong>Image Specifications:</strong>
          </p>
          <ul className="text-left space-y-1">
            <li>• Resolution: 900 x 13000 pixels (all 21 testing types)</li>
            <li>• Complete collection: 21 testing types × 14 fields each</li>
            <li>• Consistent header and footer with LinkedIn URL</li>
            <li>• Professional table structure in each card</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestingGuidePNGGenerator;