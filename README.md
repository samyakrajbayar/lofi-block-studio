# Lofi Block Studio 🧱🎧(In Developement)

**Lofi Block Studio** is a creative workspace for modular composition. It allows users to arrange, sequence, and manipulate "blocks" to generate lofi beats, ambient soundscapes, or visual patterns. Designed with a focus on minimalism and flow, it provides a distraction-free environment for experimentation.

## ✨ Features

* **Modular Block Interface:** Drag-and-drop or programmatic placement of logic/sound blocks.
* **Real-time Sequencing:** Loop and layer blocks to create complex structures from simple units.
* **Lofi Aesthetic:** Integrated visual filters and sound processors (bitcrush, vinyl crackle, tape hiss).
* **State Persistence:** Save your "studios" as JSON configurations to pick up where you left off.
* **Lightweight Core:** Optimized for low latency and a small hardware footprint.

## 🛠️ Tech Stack

* **Logic:** Python 3.x
* **Audio/Processing:** Pygame / Pydub / Librosa
* **Frontend:** Custom Tkinter or Streamlit (depending on implementation)
* **Data Handling:** JSON / YAML for configuration storage

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/samyakrajbayar/lofi-block-studio.git
cd lofi-block-studio

```


2. **Set up the environment:**
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

```


3. **Install dependencies:**
```bash
pip install -r requirements.txt

```



## 🖥️ Usage

To open the studio:

```bash
python studio.py

```

### Keyboard Shortcuts

* **Space:** Play/Pause the sequence.
* **B:** Add a new Block.
* **S:** Save current layout.
* **L:** Toggle lofi audio filters.

## 📐 The Architecture

The studio operates on a **Node-Block Model**. Each block represents a discrete piece of data (a frequency, a sample, or a color hex) that passes through a central sequencer engine.

## 🤝 Contributing

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/NewBlockType`).
3. Commit your Changes (`git commit -m 'Add "Ambient Pad" block type'`).
4. Push to the Branch (`git push origin feature/NewBlockType`).
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
