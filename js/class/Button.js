// la classe Button
function Button (all, bgColor, bgAlpha, text, textColor, textAlpha, textSize, textFont, x, y, w, h)
{
	this.all = all;
	this.bgColor = bgColor;
	this.bgAlpha = bgAlpha;
	this.text = text;
	this.textColor = textColor;
	this.textAlpha = textAlpha;
	this.textSize = textSize;
	this.textFont = textFont;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}
Button.prototype.constructor = Button;
Button.prototype.fillRect = function ()
{
	this.all.context.fillStyle = this.bgColor;
	this.all.context.globalAlpha = this.bgAlpha;
	this.all.context.fillRect(this.x, this.y, this.w, this.h);
}
Button.prototype.fillText = function ()
{
	this.all.context.font = this.textSize + "px " + this.textFont;
	this.all.context.fillStyle = this.textColor;
	this.all.context.globalAlpha = this.textAlpha;
	this.all.context.fillText(this.text, this.x, this.y);
}
Button.prototype.isClicked = function ()
{
	var xywh = [this.x, this.y, this.w, this.h];
	if (all.isButtonClicked(xywh))
			return true;
		return false;
}
