export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample1:', japan)

  const usa: Country = {
    capital: 'NY',
    language: 'English',
    name: 'USA',
  }
  console.log('Object alisa sample2:', usa)

  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }
  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型(union)KnightまたはWizardの型を持つ
  type Adventurer = Knight | Wizard
  // 交差型(intersection)…KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '棍棒',
    swordSkill: '叩く',
  }
  console.log('Object alisa sample3:', adventurer1)
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '杖',
    magicSkill: 'メラ',
  }
  console.log('Object alisa sample4:', adventurer2)

  const paladin: Paladin = {
    hp: 100,
    sp: 30,
    mp: 30,
    weapon: '棍棒',
    swordSkill: '叩く',
    magicSkill: 'メラ',
  }
  console.log('Object alisa sample5:', paladin)
}
