/**
 * Created by orzi on 2024-05-02 22:43:13.
 */

module CustomGameString {
    /**
     * 当前语言
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数 
     */
    export function f9(trigger: CommandTrigger, p: CustomGameStringParams_9): string {
        return Orzi_Tools.Language.instance.local || '';
    }
}

module CustomGameNumber {
    /**
     * 是否是开发模式
     * @param trigger 触发器，可能为空
     * @param p 自定义数值参数 
     */
    export function f12(trigger: CommandTrigger, p: CustomGameNumberParams_12): number {
        return (Config.EDIT_MODE || !Config.RELEASE_GAME) ? 1 : 0;
    }
}