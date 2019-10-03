// images.requestScreenCapture(false);
// 自动战斗 无限池

import { img } from '@/assets/images';
import {
  clickImage,
  tryClickImage,
  waitAndClickImage,
  findImage
} from '@/utils/image';
import { wait } from '@/utils/wait';
import { trySwipeUp, tapTap, tryTransform2dragon } from '@/utils/battle';

export async function autoCombat(): Promise<void> {
  // 是否在房间
  await tryToBeCaptain();
  await battleGroundAutoCombat();
}

async function battleGroundAutoCombat(): Promise<void> {
  try {
    await ifInBattleGround();
  } catch {
    // still loading or in prepare
  }
}

async function ifInBattleGround(): Promise<void> {
  // 上滚4次之后开始点击
  const pos: Point = findImage(img.menuButton);
  toastLog(`进入战斗`);
  await wait(1000);
  await trySwipeUp();
  await wait(400);
  await trySwipeUp();
  await wait(400);
  await trySwipeUp();
  await wait(400);
  await trySwipeUp();
  await wait(400);
  await tap2end();
}

export async function tap2end(): Promise<void> {
  try {
    // 查看战斗是否结束
    await tapTap();
    tryTransform2dragon();
    await repeatWithStamina();
  } catch {
    toastLog(`战斗中`);
    await tap2end();
  }
}

async function repeatWithStamina(): Promise<void> {
  const pos: Point = clickImage(img.continueButtonRed);
  toastLog(`等待蓝色续战，5s`);
  await waitAndClickImage(img.nextBattleBlue, { timeout: 3e3 });
  await findAnotherRoom();
  // await waitAndClickImage(img.continueButtonRed, { timeout: 3e3 });
}

async function findAnotherRoom(): Promise<void> {
  await waitAndClickImage(img.continueButtonRed, { timeout: 3e3 });
}

async function tryToBeCaptain(): Promise<void> {
  try {
    toastLog(`准备中`);
    await captainReady();
  } catch {
    tryClickImage(img.teamReadyButton);
  }
}

async function captainReady(): Promise<void> {
  const pos: Point = clickImage(img.startBattleButton);
  await wait(3000);
  tryClickImage(img.cancelButton);
  tryClickImage(img.stillStartButtonRed); // 这里是红色按钮
  tryClickImage(img.closeButton);
  tryClickImage(img.cancelButton);
}
