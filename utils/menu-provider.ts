import { z } from 'zod';
import { parse } from 'yaml';
import fs from 'node:fs/promises';

const MenuSection = z.object({
  section: z.string(),
  items: z.array(z.tuple([z.string(), z.string().nullable()])),
});
type MenuSection = z.infer<typeof MenuSection>;

export const getMenuSections = async (): Promise<MenuSection[]> => {
  // read file from ./configs/menu.yaml using nodejs
  const menuYaml = await fs.readFile('./data/menu.yaml', { encoding: 'utf-8' });
  // parse yaml to json
  const menuJson = parse(menuYaml);
  // validate json using zod
  const menuSections = MenuSection.array().parse(menuJson);
  return menuSections;
};
