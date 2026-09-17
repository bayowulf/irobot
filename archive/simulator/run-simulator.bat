@echo off
setlocal
set "SIM=%~dp0simulator.html"
if not exist "%SIM%" (
  echo.
  echo   ERROR: simulator.html was not found next to this launcher.
  echo   Keep run-simulator.bat and simulator.html in the same folder.
  echo.
  pause
  exit /b 1
)
echo Launching iRobot Session Simulator in your default browser...
start "" "%SIM%"
exit /b 0
