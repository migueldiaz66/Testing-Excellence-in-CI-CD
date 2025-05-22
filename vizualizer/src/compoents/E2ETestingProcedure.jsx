import React, { useRef, useEffect, useState } from 'react';

const E2ETestingProcedure = () => {
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
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  };

  const drawArrow = (ctx, fromX, fromY, toX, toY, color = '#4f46e5') => {
    const headLength = 15;
    const angle = Math.atan2(toY - fromY, toX - fromX);

    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    // Arrow head
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
  };

  const drawIcon = (ctx, x, y, type, size = 24) => {
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#ffffff';

    switch (type) {
      case 'plan':
        // Document icon
        ctx.beginPath();
        ctx.rect(x, y, size * 0.8, size);
        ctx.moveTo(x + size * 0.8, y);
        ctx.lineTo(x + size, y + size * 0.2);
        ctx.lineTo(x + size, y + size);
        ctx.lineTo(x, y + size);
        ctx.stroke();
        break;
      case 'design':
        // Pencil icon
        ctx.beginPath();
        ctx.moveTo(x, y + size);
        ctx.lineTo(x + size * 0.3, y + size * 0.7);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size * 0.7, y + size * 0.3);
        ctx.closePath();
        ctx.stroke();
        break;
      case 'execute':
        // Play button
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x + size, y + size/2);
        ctx.closePath();
        ctx.fill();
        break;
      case 'monitor':
        // Eye icon
        ctx.beginPath();
        ctx.ellipse(x + size/2, y + size/2, size/2, size/3, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x + size/2, y + size/2, size/6, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 'report':
        // Chart icon
        ctx.beginPath();
        ctx.rect(x, y + size * 0.6, size * 0.3, size * 0.4);
        ctx.rect(x + size * 0.35, y + size * 0.3, size * 0.3, size * 0.7);
        ctx.rect(x + size * 0.7, y, size * 0.3, size);
        ctx.fill();
        break;
    }
  };

  const generateImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const width = 1920;
    const height = 1080;
    canvas.width = width;
    canvas.height = height;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#1e293b');
    gradient.addColorStop(1, '#0f172a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('End-to-End Testing Coverage Procedure', width/2, 80);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText('Comprehensive Testing Workflow from Planning to Reporting', width/2, 120);

    // Main workflow phases
    const phases = [
      {
        title: '1. Test Planning',
        subtitle: 'Requirements Analysis',
        color: '#3b82f6',
        icon: 'plan',
        x: 150,
        y: 200,
        items: [
          'Analyze business requirements',
          'Define test objectives',
          'Identify test scenarios',
          'Plan test environment',
          'Resource allocation'
        ]
      },
      {
        title: '2. Test Design',
        subtitle: 'Coverage Strategy',
        color: '#10b981',
        icon: 'design',
        x: 500,
        y: 200,
        items: [
          'Create test cases',
          'Design test data',
          'UI/UX flow mapping',
          'API integration points',
          'Error handling scenarios'
        ]
      },
      {
        title: '3. Test Execution',
        subtitle: 'Automated & Manual',
        color: '#f59e0b',
        icon: 'execute',
        x: 850,
        y: 200,
        items: [
          'Environment setup',
          'Execute test suites',
          'Cross-browser testing',
          'Performance validation',
          'Security checks'
        ]
      },
      {
        title: '4. Monitoring',
        subtitle: 'Real-time Tracking',
        color: '#ef4444',
        icon: 'monitor',
        x: 1200,
        y: 200,
        items: [
          'Test execution status',
          'Performance metrics',
          'Error detection',
          'Coverage analysis',
          'Live reporting'
        ]
      },
      {
        title: '5. Reporting',
        subtitle: 'Results & Analytics',
        color: '#8b5cf6',
        icon: 'report',
        x: 1550,
        y: 200,
        items: [
          'Test coverage report',
          'Defect analysis',
          'Performance summary',
          'Risk assessment',
          'Recommendations'
        ]
      }
    ];

    // Draw phase boxes and content
    phases.forEach((phase, index) => {
      const boxWidth = 280;
      const boxHeight = 400;

      // Main phase box
      roundRect(ctx, phase.x, phase.y, boxWidth, boxHeight, 12, phase.color);

      // Icon
      drawIcon(ctx, phase.x + 20, phase.y + 20, phase.icon, 32);

      // Phase title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(phase.title, phase.x + 70, phase.y + 40);

      // Subtitle
      ctx.font = '14px Arial, sans-serif';
      ctx.fillStyle = '#e2e8f0';
      ctx.fillText(phase.subtitle, phase.x + 70, phase.y + 62);

      // Items list
      ctx.fillStyle = '#ffffff';
      ctx.font = '13px Arial, sans-serif';
      phase.items.forEach((item, itemIndex) => {
        const itemY = phase.y + 100 + (itemIndex * 35);
        
        // Bullet point
        ctx.beginPath();
        ctx.arc(phase.x + 25, itemY - 5, 4, 0, 2 * Math.PI);
        ctx.fill();
        
        // Item text
        ctx.fillText(item, phase.x + 40, itemY);
      });

      // Draw arrow to next phase
      if (index < phases.length - 1) {
        const nextPhase = phases[index + 1];
        drawArrow(ctx, 
          phase.x + boxWidth + 10, 
          phase.y + boxHeight/2, 
          nextPhase.x - 10, 
          nextPhase.y + boxHeight/2,
          '#64748b'
        );
      }
    });

    // Coverage metrics section
    const metricsY = 650;
    ctx.fillStyle = '#1e293b';
    roundRect(ctx, 100, metricsY, width - 200, 280, 12, '#1e293b', '#475569');

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Key Coverage Metrics', width/2, metricsY + 40);

    // Metrics boxes
    const metrics = [
      { label: 'Functional Coverage', value: '95%', color: '#10b981' },
      { label: 'Code Coverage', value: '87%', color: '#3b82f6' },
      { label: 'Browser Coverage', value: '100%', color: '#f59e0b' },
      { label: 'API Coverage', value: '92%', color: '#ef4444' },
      { label: 'User Journey Coverage', value: '89%', color: '#8b5cf6' },
      { label: 'Performance Coverage', value: '94%', color: '#06b6d4' }
    ];

    const metricBoxWidth = 250;
    const metricBoxHeight = 80;
    const metricStartX = 150;
    const metricStartY = metricsY + 80;

    metrics.forEach((metric, index) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      const x = metricStartX + (col * 300);
      const y = metricStartY + (row * 100);

      // Metric box
      roundRect(ctx, x, y, metricBoxWidth, metricBoxHeight, 8, metric.color);

      // Metric value
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(metric.value, x + metricBoxWidth/2, y + 35);

      // Metric label
      ctx.font = '14px Arial, sans-serif';
      ctx.fillText(metric.label, x + metricBoxWidth/2, y + 60);
    });

    // Tools and technologies section
    const toolsY = 970;
    ctx.fillStyle = '#64748b';
    ctx.font = '16px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Tools: Cypress • Selenium • Playwright • Jest • Postman • JMeter • OWASP ZAP', width/2, toolsY);

    // Footer with LinkedIn
    ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
    ctx.font = '14px Arial, sans-serif';
    ctx.fillText('Created by Miguel Díaz Macedo | LinkedIn: https://www.linkedin.com/in/migueldiazmacedo/', width/2, toolsY + 40);

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
      downloadLink.download = 'e2e-testing-coverage-procedure.png';
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
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          End-to-End Testing Coverage Procedure
        </h1>
        <p className="text-gray-600">
          1920x1080 HD visualization of comprehensive E2E testing workflow
        </p>
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-blue-800 text-sm">
            <strong>Professional E2E Testing Procedure:</strong> Complete workflow from requirements analysis 
            to final reporting, including coverage metrics and tool recommendations.
          </p>
        </div>
        
        <canvas
          ref={canvasRef}
          className="border border-gray-300 max-w-full h-auto cursor-pointer shadow-lg"
          style={{ maxHeight: '600px' }}
          title="Right-click to save image"
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
        
        <div className="text-center text-sm text-gray-600 max-w-4xl">
          <p className="mb-2">
            <strong>Image Features:</strong>
          </p>
          <ul className="text-left space-y-1">
            <li>• <strong>Resolution:</strong> 1920x1080 pixels (Full HD)</li>
            <li>• <strong>5-Phase Workflow:</strong> Planning → Design → Execution → Monitoring → Reporting</li>
            <li>• <strong>Coverage Metrics:</strong> Functional, Code, Browser, API, User Journey, Performance</li>
            <li>• <strong>Professional Design:</strong> Dark gradient background with color-coded phases</li>
            <li>• <strong>Tool Integration:</strong> Cypress, Selenium, Playwright, Jest, Postman, JMeter</li>
            <li>• <strong>LinkedIn Attribution:</strong> Professional branding for sharing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default E2ETestingProcedure;