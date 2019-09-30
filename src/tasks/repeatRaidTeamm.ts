import { img } from '@/assets/images';
import { tryTransform2dragon } from '@/utils/battle';
import { clickImage, tryClickImage, waitAndClickImage } from '@/utils/image';
import { wait } from '@/utils/wait';

export async function repeatRaidTeamm(): Promise<void> {
  tryClickImage(img.teamReadyButton);
  tryClickImage(img.startBattleButton);
  await wait(3000);
  tryClickImage(img.stillStartButton);
  tryClickImage(img.closeButton);
  tryClickImage(img.autoBattleSwitchOff);
  tryClickImage(img.retryButtonRed);
  tryClickImage(img.okButton);
  // tryClickImage(img.cancelButton);
  // tryClickImage(img.tapButton);
  // tryClickImage(img.nextText);
  // if (tryClickImage(img.giveUpButtonWhite)) {
  //   await waitAndClickImage(img.giveUpButtonBlue, { timeout: 60e3 });
  //   throw new Error('队伍战力不足, 无法通关');
  // }
  // tslint:disable-next-line: no-floating-promises
  tryTransform2dragon();
  await tryRepeatWithStaminaTeamMember();
}

async function tryRepeatWithStaminaTeamMember(): Promise<void> {
  try {
    await repeatWithStamina();
  } catch {
    tryClickImage(img.continueButtonRed);
  }
}

async function repeatWithStamina(): Promise<void> {
  const pos: Point = clickImage(img.continueButtonBlue);
  await waitAndClickImage(img.nextBattleBlue);
}
