// la classe Button
function Button (all, id, text, textColor, textSize, textFont, text_offsetX, text_offsetY, bgColor, x, y, w, h)
{
	this.all = all;
	this.id = id;
	this.text = text;
	this.textColor = textColor;
	this.textAlpha = 1;
	this.textSize = textSize;
	this.textFont = textFont;
	this.text_offsetX = text_offsetX;
	this.text_offsetY = text_offsetY;
	this.bgColor = bgColor;
	this.bgAlpha = 1;
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
	this.all.context.fillText(this.text, this.x + this.text_offsetX, this.y + this.text_offsetY);
}
Button.prototype.isClicked = function (all)
{
	var xywh = [this.x, this.y, this.w, this.h];
	if (!!all.touch.id && all.touch.id == "end")
	{
		var r = this.all.isButtonClicked(xywh);
		if (r)	all.touch = {};
		return r;
	}
}
