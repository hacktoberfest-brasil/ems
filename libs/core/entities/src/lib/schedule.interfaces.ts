export interface Schedule {
  schedule: ScheduleElement[];
  speakers: Speaker[];
  map:      Map[];
  tracks:   Track[];
}

export interface Map {
  name:    string;
  lat:     number;
  lng:     number;
  center?: boolean;
}

export interface ScheduleElement {
  date:   string;
  groups: Group[];
}

export interface Group {
  time:     string;
  sessions: Session[];
  hide?: boolean;
}

export type Timeline = ScheduleElement & { shownSessions: number };

export interface TimelineItem {
  name:       string;
  profilePic: string;
  instagram:  string;
  twitter:    string;
  about:      string;
  title:      string;
  location:   string;
  email:      string;
  phone:      string;
  id:         string;
}

export interface Session {
  name:          string;
  timeStart:     string;
  timeEnd:       string;
  location:      string;
  tracks:        string[];
  id:            string;
  description?:  string;
  speakerNames?: string[];
}

export interface Speaker {
  name:       string;
  profilePic: string;
  instagram:  string;
  twitter:    string;
  about:      string;
  title:      string;
  location:   string;
  email:      string;
  phone:      string;
  id:         string;
}

export interface Track {
  name: string;
  icon: string;
}
