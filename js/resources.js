export default function Resources() {
    const returnCodes = {
        "200 Ok:": "Ocorre quando a requisição é concluída com êxito e se obtém o retorno esperado.",
        "201 Sem conteúdo:": "Ocorre quando a requisição é concluída com êxito, porém nenhum contéudo é localizado para retorno conforme parâmetros fornecidos para a requisição.",
    }
    
    const errorCodes = {
        "400 Requisição inválida:": "Ocorre quando a requisição possui argumentos inválidos para completar a solicitação.",
        "401 Não autorizado:": "Ocorre quando o usuário não está devidamente autenticado (Token inválido) ou quando não possui permissão para acessar o recurso solicitado.",
        "403 Proibido:": "Ocorre quando o servidor recebe a requisição e foi capaz de identificar o autor, porém não autorizou a emissão de um resposta.",
        "404 Não encontrado:": "Ocorre quando a chamada não encontra o caminho de destino da requisição, seja pelo fornecimento errado da URL do destino ou por não disponibilidade do serviço requisitado.",
        "500 Erro interno do servidor:": "Ocorre quando o servidor não consegue concluir com êxito a requisição solicitada."
    }

    const nextStepsList = {
        "1": 'Insira o link da API desenvolvida por você no campo "Link API";',
        "2": 'Insira seu token de acesso no campo "Token de acesso;"',
        "3": 'Quando o motorista coletar a entrega você deve enviar uma ocorrência 133(Saiu para entrega) para o endpoint informado na aba de ocorrências com o token recebido por e-mail para cada AWB presente na rota.',
        "4": 'Depois você pode finalizar ou enviar uma ocorrência de insucesso, sempre com as imagens em anexo.',
    }

    const jsonEntregaRealizada = { 
        "Unidade": "MAO", 
        "DataEntrega":"2024-01-23T12:54:45.521-03:00",
        "Nome": "NOME RESPONSAVEL QUE RECEBEU", 
        "CpfMotorista": "12312313213", 
        "RG": "12345678912365", 
        "ComprovanteEntrega": "/9j/4AAQSkZJRgABAQA......", 
        "Assinatura": "/9j/4AAQSkZJRgABAQAAAQABAAD/4g......", 
        "DetalheEntrega": { 
            "Conhecimento": [ 
                { 
                    "Numero": "577012345678", 
                    "Ocorrencia": { 
                        "Codigo": 1, 
                        "Descricao": "ENTREGA REALIZADA NORMALMENTE" 
                    } 
                } 
            ] 
        } 
    }

    const jsonRecebimentoAusente = { 
        "Unidade": "MAO", 
        "Nome": "NOME RESPONSAVEL QUE RECEBEU", 
        "CpfMotorista": "12312313213", 
        "RG": "12345678912365", 
        "ComprovanteEntrega": "/9j/4AAQSkZJRgABAQA......", 
        "DetalheEntrega": { 
            "Conhecimento": [ 
                { 
                    "Numero": "577012345678", 
                    "Ocorrencia": { 
                        "Codigo": 46, 
                        "Descricao": "RESPONSAVEL DE RECEBIMENTO AUSENTE" 
                    } 
                } 
            ] 
        } 
    }

    const jsonRotas = {
        "empresa": "POA",
        "rotas": [
            {
                "codigo": "00032256",
                "nomeRota": "RD00032256",
                "dataRota": "2022-09-27T12:32:17.633",
                "placaVeiculo": "FFF03",
                "tipo": 0,
                "transportadora": {
                    "nome": "POA",
                    "documento": "09296295000593"
                },
                "deposito": {
                    "codigo": "1",
                    "nome": "POA"
                },
                "motorista": {
                    "codigo": "10101010101",
                    "documento": "10101010101",
                    "nome": "NOME DO MOTORISTA"
                },
                "entregas": [
                    {
                        "cliente": {
                            "codigo": "07432517002061",
                            "nome": "PORTO ALEGREPORTO ALEGRE",
                            "cep": "01200010",
                            "endereco": "RUA TESTE TESTE",
                            "numeroEndereco": "0101010101",
                            "complemento": "",
                            "bairro": "RIO BRANCO",
                            "cidade": "CANOAS",
                            "estado": "RS",
                            "telefone": "9999999999",
                            "tipo": 1,
                            "observacao": ""
                        },
                        "pedidos": [
                            {
                                "codigo": "57717430313",
                                "tipo": "DELIVERY",
                                "notasFiscais": [
                                    {
                                        "numero": "57717430313",
                                        "tipoOperacao": "ENTREGA",
                                        "serie": "1",
                                        "peso": 1.0,
                                        "pesoCubado": 1.33,
                                        "volume": 1.0,
                                        "valor": 850.0, 
                                        "ctes": [
                                            {
                                                "Awb": "57717430313", 
                                                "Key": "52230609296295001050570030002972281174303139", 
                                                "AwbValor": 850.0,
                                                "DataEmissao": "2023-06-01T16:18:57.467Z" 
                                            }
                                        ],
                                        "notaFiscalVolumes": [
                                            {
                                                "codigoNegocio": "577174303130001", 
                                                "descricao": "NORTEST", 
                                                "codigoBarras": "577174303130001" 
                
                                            }
                                        ],
                                        "condicaoPagamento": "PX",
                                        "documento": "POA"
                                    }
                                ]
                            } 
                        ], 
                        "sequencia": 1
                    }
                ]
            }
        ], 
        "empresaemissora": { 
            "razaosocial": "AZUL LINHAS AEREAS BRASILEIRAS S/A", 
            "cnpj": "10101010000110", 
            "Pais": "BR", 
            "Estado": "SP", 
            "Cidade": "SAO PAULO", 
            "Endereco": "AV DE EXEMPLO", 
            "EnderecoNumero": "101", 
            "Cep": "10101010", 
        }
    } 

    return {
        returnCodes,
        errorCodes,
        jsonEntregaRealizada,
        jsonRecebimentoAusente,
        nextStepsList,
        jsonRotas
    }
}
