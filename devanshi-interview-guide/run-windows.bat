@echo off
echo Installing project dependencies...
call npm install
if errorlevel 1 (
  echo.
  echo Installation failed. Check that Node.js is installed and your internet connection is working.
  pause
  exit /b 1
)
echo.
echo Starting the interview guide...
call npm run dev
pause
