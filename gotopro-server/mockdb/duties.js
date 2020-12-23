const creationTimestamp = 1608729779000  - 9 * 86400000;
//timeStamp in milisecond back 9 days

const colors = {
    darkblue: "#1A535C",
    lightblue: "#4ECDC4",
    salmon: "#FF6B6B",
    whiteblue: "#F7FFF7",
    yellow: "#f9c74f",
    green: "#90be6d",
    lightgrey: "#e5e5e5",
};

("#1A535C");

let duties = [
    {
      dutyId: "task001",
      dutyName: "Water plants ",
      description: "Cause otherwise they die",
      color: "pink",
      currentStreak: 3,
      maxStreak: 4,
      type: "check",
      goal: 1,
      status: false,
      creationDate: creationTimestamp,
      history: {
        "2020-07-25": {
          timestamp: 1596442541541 - 9 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-26": {
          timestamp: 1596442541541 - 8 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-27": {
          timestamp: 1596442541541 - 7 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-28": {
          timestamp: 1596442541541 - 6 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-29": {
          timestamp: 1596442541541 - 5 * 86400000,
          selected: false,
        },
        "2020-07-30": {
          timestamp: 1596442541541 - 4 * 86400000,
          selected: false,
        },
        "2020-07-31": {
          timestamp: 1596442541541 - 3 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-01": {
          timestamp: 1596442541541 - 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-02": {
          timestamp: 1596442541541 - 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-03": {
          timestamp: 1596442541541,
          selected: false,
          selectedColor: "tomato",
        },
        "2020-08-04": {
          timestamp: 1596442541541 + 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-05": {
          timestamp: 1596442541541 + 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
      },
    },
    {
      dutyId: "task002",
      dutyName: "Push ups",
      description: "Need to get fit for (next) summer",
      color: colors.salmon,
      currentStreak: 3,
      maxStreak: 4,
      type: "count",
      goal: 10,
      status: false,
      creationDate: 1596442541541 - 51 * 86400000,
      history: {
        "2020-06-13": {
          timestamp: 1596442541541 - 51 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-14": {
          timestamp: 1596442541541 - 50 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-15": {
          timestamp: 1596442541541 - 49 * 86400000,
          selected: false,
        },
        "2020-06-16": {
          timestamp: 1596442541541 - 48 * 86400000,
          selected: false,
        },
        "2020-06-17": {
          timestamp: 1596442541541 - 47 * 86400000,
          selected: false,
        },
        "2020-06-18": {
          timestamp: 1596442541541 - 46 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-19": {
          timestamp: 1596442541541 - 45 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-20": {
          timestamp: 1596442541541 - 44 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-21": {
          timestamp: 1596442541541 - 43 * 86400000,
          selected: false,
        },
        "2020-06-22": {
          timestamp: 1596442541541 - 42 * 86400000,
          selected: false,
        },
        "2020-06-23": {
          timestamp: 1596442541541 - 41 * 86400000,
          selected: false,
        },
        "2020-06-24": {
          timestamp: 1596442541541 - 40 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-25": {
          timestamp: 1596442541541 - 39 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-26": {
          timestamp: 1596442541541 - 38 * 86400000,
          selected: false,
        },
        "2020-06-27": {
          timestamp: 1596442541541 - 37 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-28": {
          timestamp: 1596442541541 - 36 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-29": {
          timestamp: 1596442541541 - 35 * 86400000,
          selected: false,
        },
        "2020-06-30": {
          timestamp: 1596442541541 - 34 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-01": {
          timestamp: 1596442541541 - 33 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-02": {
          timestamp: 1596442541541 - 32 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-03": {
          timestamp: 1596442541541 - 31 * 86400000,
          selected: false,
        },
        "2020-07-04": {
          timestamp: 1596442541541 - 30 * 86400000,
          selected: false,
        },
        "2020-07-05": {
          timestamp: 1596442541541 - 29 * 86400000,
          selected: false,
        },
        "2020-07-06": {
          timestamp: 1596442541541 - 28 * 86400000,
          selected: false,
        },
        "2020-07-07": {
          timestamp: 1596442541541 - 27 * 86400000,
          selected: false,
        },
        "2020-07-08": {
          timestamp: 1596442541541 - 26 * 86400000,
          selected: false,
        },
        "2020-07-09": {
          timestamp: 1596442541541 - 25 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-10": {
          timestamp: 1596442541541 - 24 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-11": {
          timestamp: 1596442541541 - 23 * 86400000,
          selected: false,
        },
        "2020-07-12": {
          timestamp: 1596442541541 - 22 * 86400000,
          selected: false,
        },
        "2020-07-13": {
          timestamp: 1596442541541 - 21 * 86400000,
          selected: false,
        },
        "2020-07-14": {
          timestamp: 1596442541541 - 20 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-15": {
          timestamp: 1596442541541 - 19 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-16": {
          timestamp: 1596442541541 - 18 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-17": {
          timestamp: 1596442541541 - 17 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-18": {
          timestamp: 1596442541541 - 16 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-19": {
          timestamp: 1596442541541 - 15 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-20": {
          timestamp: 1596442541541 - 14 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-21": {
          timestamp: 1596442541541 - 13 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-22": {
          timestamp: 1596442541541 - 12 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-23": {
          timestamp: 1596442541541 - 11 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-24": {
          timestamp: 1596442541541 - 10 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-25": {
          timestamp: 1596442541541 - 9 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-26": {
          timestamp: 1596442541541 - 8 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-27": {
          timestamp: 1596442541541 - 7 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-28": {
          timestamp: 1596442541541 - 6 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-29": {
          timestamp: 1596442541541 - 5 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-30": {
          timestamp: 1596442541541 - 4 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-31": {
          timestamp: 1596442541541 - 3 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-01": {
          timestamp: 1596442541541 - 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-02": {
          timestamp: 1596442541541 - 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-03": {
          timestamp: 1596442541541,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-08-03": {
          timestamp: 1596442541541,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-04": {
          timestamp: 1596442541541 + 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-05": {
          timestamp: 1596442541541 + 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
      },
    },
    {
      dutyId: "task004",
      dutyName: "HIIT",
      description: "Exercise is good for mind and body",
      color: colors.salmon,
      currentStreak: 1,
      maxStreak: 4,
      type: "time",
      goal: 0,
      hours: "0",
      minutes: "45",
      status: false,
      creationDate: creationTimestamp,
      history: {
        "2020-07-25": {
          timestamp: 1596442541541 - 9 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-26": {
          timestamp: 1596442541541 - 8 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-27": {
          timestamp: 1596442541541 - 7 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-28": {
          timestamp: 1596442541541 - 6 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-29": {
          timestamp: 1596442541541 - 5 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-30": {
          timestamp: 1596442541541 - 4 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-31": {
          timestamp: 1596442541541 - 3 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-01": {
          timestamp: 1596442541541 - 2 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-08-02": {
          timestamp: 1596442541541 - 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-03": {
          timestamp: 1596442541541,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-08-04": {
          timestamp: 1596442541541 + 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-05": {
          timestamp: 1596442541541 + 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
      },
    },
    {
      dutyId: "task003",
      dutyName: "5 a day",
      description: "Healthy and balanced diet!",
      color: colors.yellow,
      currentStreak: 7,
      maxStreak: 7,
      type: "count",
      goal: 5,
      status: false,
      creationDate: creationTimestamp,
      history: {
        "2020-07-25": {
          timestamp: 1596442541541 - 9 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-26": {
          timestamp: 1596442541541 - 8 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-27": {
          timestamp: 1596442541541 - 7 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-28": {
          timestamp: 1596442541541 - 6 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-29": {
          timestamp: 1596442541541 - 5 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-30": {
          timestamp: 1596442541541 - 4 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-31": {
          timestamp: 1596442541541 - 3 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-01": {
          timestamp: 1596442541541 - 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-02": {
          timestamp: 1596442541541 - 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-03": {
          timestamp: 1596442541541,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-08-04": {
          timestamp: 1596442541541 + 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-05": {
          timestamp: 1596442541541 + 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
      },
    },
    {
      dutyId: "task005",
      dutyName: "Social Media",
      description: "Because they are evil ",
      color: colors.lightblue,
      currentStreak: 3,
      maxStreak: 3,
      type: "time",
      goal: 0,
      hours: "0",
      minutes: "1",
      status: false,
      creationDate: creationTimestamp,
      history: {
        "2020-07-25": {
          timestamp: 1596442541541 - 9 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-26": {
          timestamp: 1596442541541 - 8 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-27": {
          timestamp: 1596442541541 - 7 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-28": {
          timestamp: 1596442541541 - 6 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-29": {
          timestamp: 1596442541541 - 5 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-30": {
          timestamp: 1596442541541 - 4 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-31": {
          timestamp: 1596442541541 - 3 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-01": {
          timestamp: 1596442541541 - 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-02": {
          timestamp: 1596442541541 - 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-03": {
          timestamp: 1596442541541,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-08-04": {
          timestamp: 1596442541541 + 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-05": {
          timestamp: 1596442541541 + 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
      },
    },
    {
      dutyId: "task006",
      dutyName: "Play with cat",
      description: "She is just SO CUTEEEE",
      color: colors.yellow,
      currentStreak: 14,
      maxStreak: 31,
      type: "time",
      goal: 0,
      hours: "0",
      minutes: "30",
      status: false,
      creationDate: 1596442541541 - 63 * 86400000,
      history: {
        "2020-06-01": {
          timestamp: 1596442541541 - 63 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-02": {
          timestamp: 1596442541541 - 62 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-03": {
          timestamp: 1596442541541 - 61 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-04": {
          timestamp: 1596442541541 - 60 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-05": {
          timestamp: 1596442541541 - 59 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-06": {
          timestamp: 1596442541541 - 58 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-07": {
          timestamp: 1596442541541 - 57 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-08": {
          timestamp: 1596442541541 - 56 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-09": {
          timestamp: 1596442541541 - 55 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-10": {
          timestamp: 1596442541541 - 54 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-11": {
          timestamp: 1596442541541 - 53 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-12": {
          timestamp: 1596442541541 - 52 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-13": {
          timestamp: 1596442541541 - 51 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-14": {
          timestamp: 1596442541541 - 50 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-15": {
          timestamp: 1596442541541 - 49 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-16": {
          timestamp: 1596442541541 - 48 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-17": {
          timestamp: 1596442541541 - 47 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-18": {
          timestamp: 1596442541541 - 46 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-19": {
          timestamp: 1596442541541 - 45 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-20": {
          timestamp: 1596442541541 - 44 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-21": {
          timestamp: 1596442541541 - 43 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-22": {
          timestamp: 1596442541541 - 42 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-23": {
          timestamp: 1596442541541 - 41 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-24": {
          timestamp: 1596442541541 - 40 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-25": {
          timestamp: 1596442541541 - 39 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-26": {
          timestamp: 1596442541541 - 38 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-27": {
          timestamp: 1596442541541 - 37 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-28": {
          timestamp: 1596442541541 - 36 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-29": {
          timestamp: 1596442541541 - 35 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-06-30": {
          timestamp: 1596442541541 - 34 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-01": {
          timestamp: 1596442541541 - 33 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-02": {
          timestamp: 1596442541541 - 32 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-03": {
          timestamp: 1596442541541 - 31 * 86400000,
          selected: false,
        },
        "2020-07-04": {
          timestamp: 1596442541541 - 30 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-05": {
          timestamp: 1596442541541 - 29 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-06": {
          timestamp: 1596442541541 - 28 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-07": {
          timestamp: 1596442541541 - 27 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-08": {
          timestamp: 1596442541541 - 26 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-09": {
          timestamp: 1596442541541 - 25 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-10": {
          timestamp: 1596442541541 - 24 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-11": {
          timestamp: 1596442541541 - 23 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-12": {
          timestamp: 1596442541541 - 22 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-13": {
          timestamp: 1596442541541 - 21 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-14": {
          timestamp: 1596442541541 - 20 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-15": {
          timestamp: 1596442541541 - 19 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-16": {
          timestamp: 1596442541541 - 18 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-17": {
          timestamp: 1596442541541 - 17 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-18": {
          timestamp: 1596442541541 - 16 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-19": {
          timestamp: 1596442541541 - 15 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-20": {
          timestamp: 1596442541541 - 14 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-21": {
          timestamp: 1596442541541 - 13 * 86400000,
          selected: false,
          selectedColor: "limegreen",
        },
        "2020-07-22": {
          timestamp: 1596442541541 - 12 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-23": {
          timestamp: 1596442541541 - 11 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-24": {
          timestamp: 1596442541541 - 10 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-25": {
          timestamp: 1596442541541 - 9 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-26": {
          timestamp: 1596442541541 - 8 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-27": {
          timestamp: 1596442541541 - 7 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-28": {
          timestamp: 1596442541541 - 6 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-29": {
          timestamp: 1596442541541 - 5 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-30": {
          timestamp: 1596442541541 - 4 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-07-31": {
          timestamp: 1596442541541 - 3 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-01": {
          timestamp: 1596442541541 - 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-02": {
          timestamp: 1596442541541 - 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-03": {
          timestamp: 1596442541541,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-04": {
          timestamp: 1596442541541 + 1 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
        "2020-08-05": {
          timestamp: 1596442541541 + 2 * 86400000,
          selected: true,
          selectedColor: "limegreen",
        },
      },
    },
  ];
  
  module.exports = duties;