import { DateTime } from 'luxon';

export interface RoadmapTask {
  name: string;
  date: Date;
  done: boolean;
  link: string;
}

export const tasks: RoadmapTask[] = [
  {
    name: 'Community governance',
    date: DateTime.fromObject({ year: 2021, month: 12, day: 20 }).toJSDate(),
    done: false,
    link: '',
  },
  {
    name: 'Sponsored badges',
    date: DateTime.fromObject({ year: 2021, month: 11, day: 22 }).toJSDate(),
    done: false,
    link: 'https://github.com/NEAR-Edu/stats.gallery/issues/37',
  },
  {
    name: 'Dapp integrations',
    date: DateTime.fromObject({ year: 2021, month: 11, day: 21 }).toJSDate(),
    done: false,
    link: 'https://github.com/NEAR-Edu/stats.gallery/issues/41',
  },
  {
    name: 'Account status NFT',
    date: DateTime.fromObject({ year: 2021, month: 10, day: 20 }).toJSDate(),
    done: false,
    link: 'https://github.com/NEAR-Edu/stats.gallery/issues/39',
  },
  {
    name: 'Make everything sharable!',
    date: DateTime.fromObject({ year: 2021, month: 9, day: 13 }).toJSDate(),
    done: true,
    link: '',
  },
  {
    name: 'Leaderboards page',
    date: DateTime.fromObject({ year: 2021, month: 9, day: 20 }).toJSDate(),
    done: false,
    link: '',
  },
  {
    name: 'New charts',
    date: DateTime.fromObject({ year: 2021, month: 9, day: 20 }).toJSDate(),
    done: false,
    link: '',
  },
  {
    name: 'Beta release',
    date: DateTime.fromObject({ year: 2021, month: 8, day: 20 }).toJSDate(),
    done: true,
    link: '',
  },
  {
    name: 'Redesign UI',
    date: DateTime.fromObject({ year: 2021, month: 7, day: 16 }).toJSDate(),
    done: true,
    link: '',
  },
  {
    name: 'Release proof-of-concept',
    date: DateTime.fromObject({ year: 2021, month: 7, day: 15 }).toJSDate(),
    done: true,
    link: '',
  },
];
