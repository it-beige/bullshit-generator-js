import moment from 'moment';
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const loadCorpus = src => {
  const path = resolve(__dirname, '..', src);
  const data = readFileSync(path, { encoding: 'utf-8' });
  return JSON.parse(data);
};

export const saveCorpus = (title, content) => {
  const outputDir = resolve(__dirname, '..', 'output');
  const time = moment().format('|YYYY-MM-DD|HH:mm:ss');
  const outputFile = resolve(outputDir, `${title}${time}.text`);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }
  const text = `${title}\n\n    ${content.join('\n    ')}`;
  writeFileSync(outputFile, text);

  return outputFile;
};
