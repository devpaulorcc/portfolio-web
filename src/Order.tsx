import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/order.css";

function Order() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    order: "",
  });

  const [errors, setErrors] = useState({
    full_name: false,
    email: false,
    order: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false, // Limpa o erro quando o usuário começa a digitar
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    const newErrors = {
      full_name: formData.full_name.trim() === "",
      email: formData.email.trim() === "",
      order: formData.order.trim() === "",
    };

    // Se algum campo estiver vazio, não envia o formulário
    if (newErrors.full_name || newErrors.email || newErrors.order) {
      setErrors(newErrors);
      return;
    }

    const { full_name, email, order } = formData;

    const sender = "dev.paulorc@gmail.com";
    const password_app = "yfyj nfdu yllx gxem";

    try {
      const recipient = encodeURIComponent("dev.paulorc@gmail.com");
      const subject = encodeURIComponent(`Orçamento solicitado por ${full_name}`);
      const message = encodeURIComponent(`Email para contato: ${email}\n\nDescrição do pedido:\n${order}`);
      const apiUrl = `https://paulorcc.pythonanywhere.com/api/${sender}/${password_app}/${recipient}/${subject}/${message}`;

      await axios.get(apiUrl);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }

    navigate("/");
  };

  return (
    <section className="section-order">
      <div>
        <div className="div-service">
          <h3 className="font-special f-2">Quais são os meus serviços?</h3>
          <ul>
            <li>- Landing Page</li>
            <li>- Automação/Bots</li>
            <li>- Soluções E-commerce</li>
            <li>- Design Gráfico</li>
            <li>- Hospedagem</li>
            <li>- Sistema Web</li>
            <li>- Aplicativos para celular</li>
          </ul>
          <h3 className="font-special f-2">Dicas para enviar orçamento</h3>
          <ul>
            <li>1. Defina o Objetivo do Software</li>
            <li>2. Liste Funcionalidades Essenciais</li>
            <li>3. Público-Alvo</li>
            <li>4. Preferências de Interface/Design</li>
          </ul>
          <h3 className="font-special f-2">Orçamento e Prazo</h3>
          <p className="font-white">
            Você receberá um e-mail com informações <br />
            sobre orçamento e prazo do projeto.
          </p>
        </div>
      </div>
      <div className="div-form">
        <h3 className="font-special f-2">Faça um orçamento</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="full_name">
              Nome completo <span className="font-alert">*</span>
            </label>
            <input
              className="form-input"
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Digite seu nome completo..."
              value={formData.full_name}
              onChange={handleChange}
            />
            {errors.full_name && <span className="error-message font-alert">Nome completo é obrigatório</span>}
          </div>
          <div>
            <label htmlFor="email">
              Seu melhor e-mail para contato <span className="font-alert">*</span>
            </label>
            <input
              className="form-input"
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu melhor e-mail..."
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message font-alert">E-mail é obrigatório</span>}
          </div>
          <div>
            <label htmlFor="order">
              Descreva seu pedido aqui <span className="font-alert">*</span>
            </label>
            <textarea
              className="form-input"
              name="order"
              id="order"
              placeholder="Digite seu pedido aqui..."
              value={formData.order}
              onChange={handleChange}
            ></textarea>
            {errors.order && <span className="error-message font-alert">Descrição do pedido é obrigatória</span>}
          </div>
          <button className="button-submit" type="submit">
            PEDIR ORÇAMENTO
          </button>
        </form>
      </div>
    </section>
  );
}

export default Order;
