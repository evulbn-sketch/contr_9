/**************** 
 * Contr_7 *
 ****************/


// store info about the experiment session:
let expName = 'contr_7';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'task_m_s.xlsx', 'path': 'task_m_s.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + ((((("data/" + expInfo["participant"]) + "_") + expName) + "_") + expInfo["date"]));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var taskClock;
var sq_1;
var sq_2;
var resp;
var text_2;
var fbClock;
var text;
var thanksClock;
var text_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "task"
  taskClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  var corr_sum = 0;
  sq_1 = new visual.Rect ({
    win: psychoJS.window, name: 'sq_1', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -1, 
    interpolate: true, 
  });
  
  sq_2 = new visual.Rect ({
    win: psychoJS.window, name: 'sq_2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -2, 
    interpolate: true, 
  });
  
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: ' Если больше правый квадрат, нажмите "вправо", если левый - то "влево"',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "fb"
  fbClock = new util.Clock();
  // Run 'Begin Experiment' code from code_fb
  var msg = "";
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'спасибо!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'task_m_s.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(taskRoutineBegin(snapshot));
      trialsLoopScheduler.add(taskRoutineEachFrame());
      trialsLoopScheduler.add(taskRoutineEnd(snapshot));
      trialsLoopScheduler.add(fbRoutineBegin(snapshot));
      trialsLoopScheduler.add(fbRoutineEachFrame());
      trialsLoopScheduler.add(fbRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var taskMaxDurationReached;
var _resp_allKeys;
var taskMaxDuration;
var taskComponents;
function taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    taskClock.reset();
    routineTimer.reset();
    taskMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    if (resp && resp.corr === 1) {
        corr_sum++;
    }
    sq_1.setOpacity(op1);
    sq_1.setPos([xPos1, 0]);
    sq_1.setSize([w1, w1]);
    sq_1.setOri(or1);
    sq_2.setOpacity(op2);
    sq_2.setPos([xPos2, 0]);
    sq_2.setSize([w2, w2]);
    sq_2.setOri(or2);
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    psychoJS.experiment.addData('task.started', globalClock.getTime());
    taskMaxDuration = null
    // keep track of which components have finished
    taskComponents = [];
    taskComponents.push(sq_1);
    taskComponents.push(sq_2);
    taskComponents.push(resp);
    taskComponents.push(text_2);
    
    taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'task' ---
    // get current time
    t = taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sq_1* updates
    if (t >= 0.0 && sq_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sq_1.tStart = t;  // (not accounting for frame time here)
      sq_1.frameNStart = frameN;  // exact frame index
      
      sq_1.setAutoDraw(true);
    }
    
    
    // if sq_1 is active this frame...
    if (sq_1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sq_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      sq_1.tStop = t;  // not accounting for scr refresh
      sq_1.frameNStop = frameN;  // exact frame index
      // update status
      sq_1.status = PsychoJS.Status.FINISHED;
      sq_1.setAutoDraw(false);
    }
    
    
    // *sq_2* updates
    if (t >= 0.0 && sq_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sq_2.tStart = t;  // (not accounting for frame time here)
      sq_2.frameNStart = frameN;  // exact frame index
      
      sq_2.setAutoDraw(true);
    }
    
    
    // if sq_2 is active this frame...
    if (sq_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sq_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      sq_2.tStop = t;  // not accounting for scr refresh
      sq_2.frameNStop = frameN;  // exact frame index
      // update status
      sq_2.status = PsychoJS.Status.FINISHED;
      sq_2.setAutoDraw(false);
    }
    
    
    // *resp* updates
    if (t >= 0.0 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }
    
    // if resp is active this frame...
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({
        keyList: typeof ['left','right'] === 'string' ? [['left','right']] : ['left','right'], 
        waitRelease: false
      });
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[_resp_allKeys.length - 1].name;  // just the last key pressed
        resp.rt = _resp_allKeys[_resp_allKeys.length - 1].rt;
        resp.duration = _resp_allKeys[_resp_allKeys.length - 1].duration;
        // was this correct?
        if (resp.keys == 'corr_answ') {
            resp.corr = 1;
        } else {
            resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'task' ---
    taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('task.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (resp.keys === undefined) {
      if (['None','none',undefined].includes('corr_answ')) {
         resp.corr = 1;  // correct non-response
      } else {
         resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp.corr, level);
    }
    psychoJS.experiment.addData('resp.keys', resp.keys);
    psychoJS.experiment.addData('resp.corr', resp.corr);
    if (typeof resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp.rt', resp.rt);
        psychoJS.experiment.addData('resp.duration', resp.duration);
        routineTimer.reset();
        }
    
    resp.stop();
    // the Routine "task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fbMaxDurationReached;
var msg;
var fbMaxDuration;
var fbComponents;
function fbRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fb' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    fbClock.reset(routineTimer.getTime());
    routineTimer.add(0.300000);
    fbMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_fb
    if (resp && resp.corr === 1) {
        msg = "Верно!";
    } else {
        msg = "Увы(";
    }
    
    text.setText(msg);
    psychoJS.experiment.addData('fb.started', globalClock.getTime());
    fbMaxDuration = null
    // keep track of which components have finished
    fbComponents = [];
    fbComponents.push(text);
    
    fbComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fbRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fb' ---
    // get current time
    t = fbClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fbComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fb' ---
    fbComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fb.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (fbMaxDurationReached) {
        fbClock.add(fbMaxDuration);
    } else {
        fbClock.add(0.300000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thanksClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    // 1. Генерируем уникальное имя файла для OSF
    const randomID = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < 10; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    };
    const filename = `${randomID()}_data.json`;
    
    // 2. Достаем собранные данные из PsychoPy
    const dataJSON = JSON.stringify(psychoJS.experiment._trialsData);
    
    // 3. Отправляем данные в DataPipe
    fetch("https://pipe.jspsych.org/api/data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        experimentID: "gDPC9x6Q7vDd", // Ваш ID от DataPipe
        filename: filename,
        data: dataJSON,
      }),
    }).then(() => {
      // Закрываем эксперимент только ПОСЛЕ успешной отправки данных
      psychoJS.quit({info: 'Данные успешно сохранены!'});
    }).catch((error) => {
      console.error('Ошибка отправки данных в DataPipe:', error);
      psychoJS.quit({info: 'Ошибка сохранения данных'});
    });
    
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(text_3);
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_3.tStop = t;  // not accounting for scr refresh
      text_3.frameNStop = frameN;  // exact frame index
      // update status
      text_3.status = PsychoJS.Status.FINISHED;
      text_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (thanksMaxDurationReached) {
        thanksClock.add(thanksMaxDuration);
    } else {
        thanksClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
