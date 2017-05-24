var TWEEN_CONST = require('../const');

var ResetTweenData = function ()
{
    var data = this.data;
    var totalTargets = this.totalTargets;

    for (var i = 0; i < this.totalData; i++)
    {
        var tweenData = data[i];
        var target = tweenData.target;
        var gen = tweenData.gen;

        tweenData.delay = gen.delay(i, totalTargets, target);
        tweenData.duration = gen.duration(i, totalTargets, target);
        tweenData.yoyoDelay = gen.yoyoDelay(i, totalTargets, target);
        tweenData.repeat = gen.repeat(i, totalTargets, target);
        tweenData.repeatDelay = gen.repeatDelay(i, totalTargets, target);

        tweenData.progress = 0;
        tweenData.elapsed = 0;

        tweenData.repeatCounter = (tweenData.repeat === -1) ? Number.MAX_SAFE_INTEGER : tweenData.repeat;

        if (tweenData.delay > 0)
        {
            tweenData.elapsed = tweenData.delay;
            tweenData.state = TWEEN_CONST.DELAY;
        }
        else
        {
            tweenData.state = TWEEN_CONST.PENDING_RENDER;
        }
    }
};

module.exports = ResetTweenData;
