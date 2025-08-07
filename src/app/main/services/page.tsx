import Sidebar from "@/app/sidebar/Sidebar";

export default function Services() {
    return (
        <div className="relative left-[280px] w-[calc(100%-280px)] p-[30px] bg-gray-100 min-h-[100vh] text-gray-900 h-[100vh]">
            <Sidebar/>
            <div className="flex flex-col ">
                    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Serviços</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Serviço 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Assistência Técnica e Suporte para Empresas (Freelancer)
          </h3>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Clientes:</strong> Autoescolas, Supermercados, Lojas de Eletrônicos
          </p>
          <p className="text-gray-600 text-sm mb-4">
            <strong>Período:</strong> 2023 – 2024
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Manutenção de computadores, câmeras, alarmes, gateways e servidores</li>
            <li>Suporte a sistemas próprios das empresas</li>
            <li>Diagnóstico e manutenção em sistemas operacionais</li>
            <li>Formatação e recuperação de máquinas</li>
            <li>Detecção de vulnerabilidades e remoção de malwares</li>
          </ul>
        </div>

        {/* Serviço 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Técnico de Instalações em Telefonia
          </h3>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Empresa:</strong> Tecnovel
          </p>
          <p className="text-gray-600 text-sm mb-4">
            <strong>Período:</strong> Março de 2020 – Agosto de 2020
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Instalação de câmeras, sensores e caixas registradoras</li>
            <li>Configuração de amplificadores e sistemas de som</li>
            <li>Montagem de redes, servidores e cabeamento</li>
            <li>Suporte a sistemas eletrônicos e infraestrutura</li>
          </ul>
        </div>

        {/* Serviço 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Desenvolvedor Full-Stack, SDR e Suporte Técnico
            </h3>
            <p className="text-gray-600 text-sm mb-1">
              <strong>Empresa:</strong> Capturama
            </p>
            <p className="text-gray-600 text-sm mb-4">
              <strong>Período:</strong> Fevereiro de 2024 – Atualmente
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Desenvolvimento de sprints com foco em automações</li>
              <li>Treinamento e suporte técnico a clientes</li>
              <li>Correção de bugs e melhorias em sistema</li>
              <li>Prospecção de leads e venda de upgrades</li>
              <li>Tráfego pago, assessoria iFood e gestão operacional</li>
            </ul>
          </div>
          {/* Link do contrato */}

        </div>
        
      </div>
    </section>
            </div>
        </div>
    );
}