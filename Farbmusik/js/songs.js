var song = {
  "Alle meine Entchen":"CDEFGGAAAAGAAAAGFFFFEEGGGGC",
  "Tonleiter":"CDEFGAHC1uC1uHAGFEDC",
  "Haenschen Klein": "C1uAABGGFGABC1uC1uC1uC1uAABGGFAC1uC1uFGGGGGABAAAAABC1uC1uAABGGFAC1uC1uF",
  "Hanging Tree":"GAC1uD1uAAAGEGAAC1uD1uGAAAGAE1uD1uC1uD1uC1uAAAAGEGAC1uD1uAAAGA"
}

//https://www.youtube.com/watch?v=G9MKXslL6xI 0.31min
function getFrequencyFromNote(note){
  var freq;
  switch(note){
    case 'H1dis':
      freq=261.626;
      break;
    case 'C':
      freq=261.626;
      break;
    case 'Cis':
      freq=277.183;
      break;
    case 'Des':
      freq=277.183;
      break;
    case 'D':
      freq=293.665;
      break;
    case 'Dis':
      freq=311.127;
      break;
    case 'Ees':
      freq=311.127;
      break;
    case 'E':
      freq=329.628;
      break;
    case 'F':
      freq=349.228;
      break;
    case 'Fis':
      freq=369.994;
      break;
    case 'Ges':
      freq=369.994;
      break;
    case 'G':
      freq=391.995;
      break;
    case 'Gis':
      freq=415.305;
      break;
    case 'As':
      freq=415.305;
      break;
    case 'A':
      freq=440;
      break;
    case 'Ais':
      freq=466.164;
      break;
    case 'B':
      freq=466.164;
      break;
    case 'H':
      freq=493.883;
      break;
    case 'C1u':
      freq=523.251;
      break;
    case 'D1u':
      freq=587.330;
      break;
    case 'E1u':
      freq=659.255;
      break;
    case 'F1u':
      freq=698.456;
      break;
    default:
      freq=440;
      break;
  }
  return freq;
}

function playSong(key,keystrokenumber){
  var noteString, currentnote;
  noteString=song[key];
  currentnote=getcurrentNote(noteString,keystrokenumber);
  document.getElementById("p2").innerHTML=noteString;
  sin.set({freq:getFrequencyFromNote(currentnote)});
  playBing();
}

function getcurrentNote(noteString,keystrokenumber){
  var stringslice;
  var modkeystrokenum;
  var IndexOfNote, IndexOfNextNote;
  
  modkeystrokenum=keystrokenumber%getNumOfNotes(noteString);

  IndexOfNote=getIndexOfNote(noteString,modkeystrokenum);
  IndexOfNextNote=getIndexOfNote(noteString,modkeystrokenum+1);

  stringslice=noteString.slice(IndexOfNote,IndexOfNextNote);

  return stringslice;
}

function getIndexOfNote(string,number){
  var ii=0;
  var index=string.length;
  var notenumber=0;
  var character;

  while (ii <= string.length){
    character = string.charAt(ii);
    if (isNaN(character * 1)){
      if (character == character.toUpperCase()) {
        if (notenumber == number){
          index=ii;
        }
        notenumber+=1;
      } 
    }
    ii++;
  }

  return index;
}

function getNumOfNotes(strings){
  var ii=0;
  var numofnotes=0;
  var character;
  while (ii <= strings.length){
    character = strings.charAt(ii);
    if (isNaN(character * 1)){
      if (character == character.toUpperCase()) {
        numofnotes+=1;
      }
    }
    ii++;
  }
  return numofnotes;
}

//Play a random sound in certain Frequency interval
function playRandomSound(){
  sin.set({freq:Math.floor(Math.random()*(varMaxFreq-varMinFreq))+varMinFreq});
  playBing();
}