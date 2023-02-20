import { generate } from '../lib/generator.js';
import { createRandomPicker } from '../lib/random.js';

async function loadCorpus(corpusPath) {
  if (corpusPath) {
    const corpus = await (await fetch(corpusPath)).json();
    return corpus;
  }
  const defaultCorpus = await import('../corpus/data.json');
  return defaultCorpus;
}

window.bullshitGenerator = { generate, createRandomPicker, loadCorpus };
