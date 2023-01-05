import { readBlockConfig } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  const cfg = readBlockConfig(block);

  block.append("Config: " + JSON.stringify(cfg));
}
