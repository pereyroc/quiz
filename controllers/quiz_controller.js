//GET /quizer/question
exports.question=function(req,res){
	res.reder('quizes/question',{pregunta.'Capital de Italia'});
};
//GET /quizer/answer
exports.answer=function(req,res){
	if (req.query.respuesta==='Roma'){
	res.reder('quizes/answer',{prespuesta.'Correcto'});
} else {
	res.reder('quizes/answer',{prespuesta.'Incorrecto'});
}
};