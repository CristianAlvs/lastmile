export default function Tables() {

    const tableCodigosRequisicao = {
        tableId: "tableCodigosRequisicao",
        title: "Estrutura do objeto de retorno da API",
        columns: ["Nome do campo","Tipo de dado","Descrição"],
        data: [
            ["ErrorText",'string', 'Detalhes do erro' ],
            ["HasErrors", 'boolean', 'Indica se ocorreu falha (quando true) durante a requisição' ],
            ["Value",'object', 'Objeto de com os dados de retorno esperado' ],
            ["Value", 'object', 'Objeto de com os dados de retorno esperado' ]
        ]
    }

    const tableCodigosOcorrencias = {
        tableId: "tableCodigosOcorrencias",
        title: "Códigos das ocorrências",
        columns: ["CÓDIGO","OCORRÊNCIA"],
        data: [
            ["133",	"SAIU PARA ENTREGA"],
            ["3",	"RECUSA POR FALTA DE PEDIDO DE COMPRA"],
            ["4",	"RECUSA POR PEDIDO DE COMPRA CANCELADO"],
            ["6",	"ENDERECO DO CLIENTE DESTINO NAO FOI LOCALIZADO"],
            ["21",	"ESTABELECIMENTO FECHADO"],
            ["46",	"RESPONSAVEL DE RECEBIMENTO AUSENTE"],
            ["47",	"CLIENTE DESTINO EM GREVE"],
            ["77",	 "CLIENTE DESTINO MUDOU DE ENDERECO"],
            ["511",	"DESTINATARIO DESCONHECIDO NO LOCAL"],
            ["518",	"PEDIDO RECUSADO"]
        ]
    }

    const tableCodigosFinalizacoes = {
        tableId: "tableCodigosFinalizacoes",
        title: "Códigos de finalizações",
        columns: ["CÓDIGO","DESCRIÇÃO"],
        data: [
            ["1",	"ENTREGA REALIZADA NORMALMENTE"],
        ]
    }

    const tableEntregaRealizada = {
        tableId: "tableEntregaRealizada",
        title: "Estrutura do JSON da Entrega Realizada Normalmente",
        columns: ["Nome do campo", "Requisito", "Tipo de dado", "Descrição"],
        data: [
            ["Unidade",'required','string','Sigla da unidade de origem de destino da Azul Cargo. Esta informação foi recebida no envio de pedidos.' ],
            ["Nome",'required','string','Nome do responsável que recebeu a entrega.' ],
            ["cpfMotorista",'required','string','CPF do Motorista responsável pela entrega.' ],
            ["RG",'required','string','Documento do responsável que recebeu a entrega.' ],
            ["Assinatura",'required','string (BASE64)','Base64 da imagem que contém assinatura.' ],
            ["ComprovanteEntrega",'required','string (BASE64)', 'Base64 da faixada do local de entrega.' ],
            ["DataEntrega",'required','datetime', 'Data real da entrega.' ],

            ["DetalheEntrega",'required','Object', '', "highlight" ],
            ["Conhecimento",'required','list', '', 'highlight' ],
            ["Numero",'required','string', 'Numero cte que receberá a ocorrencia' ],

            ["Ocorrencia",'required','Object', '', "highlight" ],
            ["Codigo",'required','integer', 'Código da ocorrência' ],
            ["Descricao",'required','string', 'Descrição da ocorrência' ]
        ]
    }

    const tableRecebimentoAusente = {
        tableId: "tableRecebimentoAusente",
        title: "Estrutura do JSON de uma Ocorrência",
        columns: ["Nome do campo", "Requisito", "Tipo de dado", "Descrição"],
        data: [
            ["Unidade",'required','string','Sigla da unidade de origem de destino da Azul Cargo. Esta informação foi recebida no envio de pedidos.' ],
            ["Nome",'required','string','Nome do responsável que recebeu a entrega.' ],
            ["cpfMotorista",'required','string','CPF do Motorista responsável pela entrega.' ],
            ["RG",'required','string','Documento do responsável que recebeu a entrega.' ],
            ["ComprovanteEntrega",'required (Ocorrencia 133 campo deve vir nulo)','string (BASE64)', 'Base64 da faixada do local de entrega.' ],
            
            ["DetalheEntrega",'required','Object', '', "highlight"],
            ["Conhecimento",'required','list', '', "highlight"],
            ["Numero",'required','string', 'Numero cte que receberá a ocorrencia' ],
            ["Ocorrencia",'required','Object', '', "highlight" ],
            ["Codigo",'required','integer', 'Código da ocorrência' ],
            ["Descricao",'required','string', 'Descrição da ocorrência' ]
        ]
    }

    const tableRota= {
        tableId: "tableRota",
        title: "Estrutura do JSON de Rotas",
        columns: ["Campo", "Significado", "Tipo", "Limitação", "Detalhe Azul"],
        data: [
            ["Empresa",	"Código da unidade de negócio para qual as rotas são destinadas",	"String",	"20 caracteres",	"Sigla da unidade de destino"],
                
            ["Rotas",	"Abre a estrutura para afiliação de uma ou mais Rotas (viagens)",	"",	"",	"Listar Rotas", "highlight"],
            ["Codigo",	"Código interno do SK(TMS Azul) para definir uma rota (viagem).",	"String",	"20 caracteres",	"Número do RD (Rota)"],
            ["NomeRota",	"Nome da Rota de origem TMS Azul (SmartKargo)",	"String",	"100 caracteres",	"Nome da Rota (RD)"],
            ["DataRota",	"Data da rota no formato AAAA-MM-DD HH:MM:SS.MMM",	"Datetime",	"23 caracteres",	"Data/Hora execução da viagem"],
            ["PlacaVeiculo",	"Placa do veículo, sem hífen (ex. ABC1234)",	"String",	"7 caracteres",	"Placa do veículo"],
            ["Tipo",	"Tipo de Rota, 0 = Viagem comum",	"inteiro",	"1 caractere",	"Sempre 0 (zero)"],

            ["Transportadora",	"Dados para cadastro da transportadora",	"",	"",	"", "highlight"],
            ["Nome",	"Nome da Transportadora",	"String",	"100 caracteres",	"Nome da unidade de destino"],
            ["Documento",	"CNPJ da transportadora, sem ponto ou traço, e deve respeitar o formato de 14 caracteres.",	"String",	"14 caracteres",	"CNPJ da unidade de destino"],

            ["Deposito",	"Dados para cadastro do depósito",	"",	"",	"", "highlight"],
            ["Codigo",	"Código interno do seu sistema para identificar Tracking",	"Long",	"20 caracteres",	"Código da unidade de destino"],
            ["Nome",	"Nome do depósito",	"String",	"200 caracteres",	"Nome da unidade de destino"],

            ["Motorista",	"Dados para cadastro do motorista",	"",	"",	"", "highlight"],
            ["Codigo",	"CPF do motorista, sem ponto ou traço.",	"Long",	"20 caracteres",	"CPF do motorista"],
            ["Documento",	"CPF do motorista, sem ponto ou traço.",	"String",	"11 caracteres",	"CPF do motorista"],
            ["Nome",	"Nome do motorista",	"String",	"200 caracteres",	"Nome do motorista"],
                
            ["Entregas",	"Dados para cadastro da(s) entrega(s)",	"",	"",	"Lista de Entregas", "highlight"],

            ["Cliente",	"Dados para cadastro do Cliente",	"",	"",	"", "highlight"],
            ["Codigo",	"Código interno do seu sistema para identificar o cliente. Pode ser o CPF ou CNPJ do cliente.",	"String",	"11 caracteres, 50",	"CPF ou CNPJ do destinatário"],
            ["Nome",	"Nome do cliente",	"String",	"120 caracteres",	"Nome do destinatário"],
            ["Cep",	"Cep Destinatário",	"String",	"50 caracteres",	"Cep Destinatário"],
            ["Endereco",	"Rua/Avenida endereço do cliente",	"String",	"300 caracteres",	"Endereco do destinatário"],
            ["Numero Endereço",	"Numero do Endereço do Cliente Destinatário",	"String",	"100 caracteres",	"Numero do Endereço do Cliente"],
            ["Complemento",	"Complemento do Endereço",	"String",	"500 caracteres", "Complemento"],
            ["Bairro",	"Bairro do endereço do cliente",	"String",	"50 caracteres",	"Bairro do destinatário"],
            ["Cidade",	"Cidade do endereço do cliente",	"String",	"50 caracteres",	"Cidade do destinatário"],
            ["Estado",	"Estado do endereço do cliente",	"String",	"2 caracteres",	"Estado do destinatário"],
            ["Telefone",	"Telefone cliente/destinatário",	"String",	"50 caracteres",	"Telefone cliente"],
            ["Tipo", "Identifica se é Cliente ou Fornecedor 1 = Cliente, 2 = Fornecedor", "inteiro",	"1 caractere",	"Sempre 1 (um)"],
            ["Observação",	"Observação",	"",	"",	"Enviar em branco"],

            ["Pedidos",	"Entidade com informações de pedidos",	"",	"",	"Informações do Pedido", "highlight"],
            ["Codigo",	"Numero AWB",	"String",	"50 caracteres",	"Código da AWB"],
            ["Tipo",	"Tipo de operação da nota fiscal",	"String",	"200 caracteres",	"Fixo 'ENTREGA'"],

            ["NotasFiscais",	"Dados para cadastro da Nota Fiscal",	"",	"",	"Lista Notas Fiscais", "highlight"],
            ["Numero",	"Numero AWB",	"String",	"50 caracteres",	"Código da AWB"],
            ["TipoOperacao",	"Tipo de operação da nota fiscal",	"String",	"200 caracteres",	"Fixo 'ENTREGA'"],
            ["Serie",	"Serie na nota fiscal",	"String",	"3 caracteres",	"Sempre 1 (um)"],
            ["Peso ",	"Peso da encomenda",	"Numero",	"",	"Peso da encomenda"],
            ["Peso Cubado",	"Peso Cubado da encomenda",	"Numero",	"",	"Peso Cubado da encomenda"],
            ["Volume",	"Volume da encomenda",	"Numero",	"",	"Quantidade Volume da Encomenda"],
            ["Valor ",	"Valor da encomenda",	"Numero",	"",	"Valor da Mercadoria"],

            ["CTEs",	"Informações sobre CTEs",	"",	"",	"", "highlight"],
            ["Awb",	"Numero AWB",	"String",	"50 caracteres",	"Numero AWB"],
            ["Key",	"Chave da nota",	"String",	"100 caracteres",	"Chave da Nota Fiscal"],
            ["Valor ",	"Valor da Nota",	"Numero",	"",	"Valor da Nota Fiscal"],
            ["DataEmissao",	"Data Emissão",	"Datetime",	"",	"Data da Emissão"],

            ["NotaFiscalVolumes",	"Informações sobre os volumes",	"",	"",	"", "highlight"],
            ["CodigoNegocio",	"Código de negócio do volume",	"String",	"255 caracteres",	"Número do AWB + sequência do volume"],
            ["Descricao",	"Código de negócio do volume",	"String",	"255 caracteres",	"Commodities"],
            ["CodigoBarras",	"Código de negócio do volume",	"String",	"255 caracteres",	"Número do AWB + sequência do volume"],
            ["CondicaoPagamento",	"Condição imposta de pagamento na nota fiscal",	"String",	"200 caracteres",	"Tipo pagamento SK (PP, PX)"],
            ["Documento",	"CNPJ do emissor da nota fiscal, sem ponto ou traço, e deve respeitar o formato de 14 caracteres",	"String",	"14 caracteres",	"Sigla da unidade de destino"],
            ["Sequencia",	"Número da sequência de entrega. Se não tiver, informar um número sequencial.",	"INT",	"8 caracteres",	"Contador sequencial"],
            
            ["EmpresaEmissora",	"Informações da Empresa Emissora",	"",	"",	"Informações da Empresa Emissora (Azul)", "highlight"],
            ["RazaoSocial",	"Nome Razão Social da Empresa Emissora",	"String",	"",	"Nome Razão Social da Empresa Emissora"],
            ["CNPJ",	"CNPJ Empresa Emissora",	"String",	"11 caracteres, 50",	"CNPJ Empresa Emissora"],
            ["País",	"País Empresa Emissora",	"String",	"100 caracteres",	"País Empresa Emissora"],
            ["Estado",	"Estado Empresa Emissora",	"String",	"2 caracteres",	"Estado Empresa Emissora"],
            ["Cidade",	"Cidade Empresa Emissora",	"String",	"50 caracteres",	"Cidade Empresa Emissora"],
            ["Endereco",	"Endereço Empresa Emissora",	"String",	"300 caracteres",	"Endereço Empresa Emissora"],
            ["Endereconumero",	"Numero Endereço Empresa Emissora",	"String",	"100 caracteres",	"Numero Endereço Empresa Emissora"],
            ["CEP",	"CEP Endereço Empresa Emissora",	"String",	"50 caracteres",	"CEP Endereço Empresa Emissora"]
        ]
    }

    

    return {
        tableCodigosRequisicao,
        tableCodigosOcorrencias,
        tableRecebimentoAusente,
        tableEntregaRealizada,
        tableRota,
        tableCodigosFinalizacoes
    }
}
