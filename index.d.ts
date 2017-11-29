// Typings for pixi-particles 2.1.9, requires Pixi.js typings
declare namespace particles {
	
	type TexSrc = string|PIXI.Texture;
	
	export interface ParticleConstructor {
		new (emitter:Emitter):Particle;
	}
	
	export interface AnimatedParticleArt {
		textures:(TexSrc|{count:number, texture:TexSrc})[];
		framerate:number|"matchLife";
		loop?:boolean;
	}
	
	export interface ParsedAnimatedParticleArt {
		textures:PIXI.Texture[];
		framerate:number;
		elapsed:number;
		loop:boolean;
	}
	
	export class AnimatedParticle extends Particle {
		protected textures:PIXI.Texture[];
		protected duration:number;
		protected framerate:number;
		protected elapsed:number;
		protected loop:boolean;
		
		public static parseArt(art:AnimatedParticleArt[]):ParsedAnimatedParticleArt[];
		
		public applyArt(art:ParsedAnimatedParticleArt):void;
	}
	
	export class Emitter {
		protected _particleConstructor:new (emitter:Emitter)=>Particle;
		protected _frequency:number;
		protected _spawnFunc:(p:Particle, emitPosX:number, emitPosY:number, i:number)=>void;
		protected _prevEmitterPos:PIXI.Point;
		protected _prevPosIsValid:boolean;
		protected _posChanged:boolean;
		protected _parentIsPC:boolean;
		protected _parent:PIXI.Container;
		protected _emit:boolean;
		protected _spawnTimer:number;
		protected _emitterLife:number;
		protected _activeParticlesFirst:Particle;
		protected _activeParticlesLast:Particle;
		protected _poolFirst:Particle;
		protected _origConfig:any;
		protected _origArt:any;
		protected _autoUpdate:boolean;
		protected _destroyWhenComplete:boolean;
		protected _completeCallback:()=>void;
		protected _spawnPos:PIXI.Point;
		protected _ownerPos:PIXI.Point;
		protected _spawnType:string;
		protected _rotation:number;

		public particleImages:any[];
		public startAlpha:number;
		public endAlpha:number;
		public startSpeed:number;
		public endSpeed:number;
		public minimumSpeedMultiplier:number;
		public acceleration:PIXI.Point;
		public maxSpeed:number;
		public startScale:number;
		public endScale:number;
		public minimumScaleMultiplier:number;
		public startColor:[number, number, number];
		public endColor:[number, number, number];
		public minLifetime:number;
		public maxLifetime:number;
		public minStartRotation:number;
		public maxStartRotation:number;
		public noRotation:boolean;
		public minRotationSpeed:number;
		public maxRotationSpeed:number;
		public particleBlendMode:number;
		public customEase:(time:number)=>number;
		public extraData:any;
		public maxParticles:number;
		public emitterLifetime:number;
		public readonly spawnPos:PIXI.Point;
		public readonly spawnType:"point"|"rectangle"|"circle"|"burst"|"ring";
		public spawnRect:PIXI.Rectangle;
		public spawnCircle:PIXI.Circle;
		public particlesPerWave:number;
		public particleSpacing:number;
		public angleStart:number;
		public readonly rotation:number;
		public readonly ownerPos:PIXI.Point;
		public addAtBack:boolean;
		public readonly particleCount:number;
		public frequency:number;
		public particleConstructor:ParticleConstructor;
		public parent:PIXI.Container;
		public emit:boolean;
		public autoUpdate:boolean;
		
		constructor(particleParent:PIXI.Container, particleImages:any, config:any);
		
		protected recycle(p:Particle):void;
		protected _spawnPoint(p:Particle, emitPosX:number, emitPosY:number, i:number):void;
		protected _spawnRect(p:Particle, emitPosX:number, emitPosY:number, i:number):void;
		protected _spawnCircle(p:Particle, emitPosX:number, emitPosY:number, i:number):void;
		protected _spawnRing(p:Particle, emitPosX:number, emitPosY:number, i:number):void;
		protected _spawnBurst(p:Particle, emitPosX:number, emitPosY:number, i:number):void;
		protected _initSpawnType(config:any):void;

		public init(art:any, config:any):void;
		public rotate(newRot:number):void;
		public updateSpawnPos(x:number, y:number):void;
		public updateOwnerPos(x:number, y:number):void;
		public resetPositionTracking():void;
		public update(delta:number):void;
		public playOnceAndDestroy(callback?:()=>void):void;
		public playOnce(callback?:()=>void):void;
		public cleanup():void;
		public destroy():void;
	}
	
	export class Particle extends PIXI.Sprite {
		protected _sR:number;
		protected _sG:number;
		protected _sB:number;
		protected _eR:number;
		protected _eG:number;
		protected _eB:number;
		protected _doAlpha:boolean;
		protected _doScale:boolean;
		protected _doSpeed:boolean;
		protected _doAcceleration:boolean;
		protected _doColor:boolean;
		protected _doNormalMovement:boolean;
		protected _oneOverLife:number;
		protected next:Particle;
		protected prev:Particle;
		
		public emitter:Emitter;
		public velocity:PIXI.Point;
		public maxLife:number;
		public age:number;
		public ease:(time:number)=>number;
		public extraData:any;
		public startAlpha:number;
		public endAlpha:number;
		public startSpeed:number;
		public endSpeed:number;
		public acceleration:PIXI.Point;
		public maxSpeed:number;
		public startScale:number;
		public endScale:number;
		public startColor:number[];
		public endColor:number[];
		
		/** Note that for Particle, the parameter is an array of strings or PIXI.Textures, and an array of Textures is returned. */
		public static parseArt(art:any):any;
		public static parseData(data:any):any;
		
		constructor(emitter:Emitter);
		
		protected Particle_init():void;
		protected Particle_update(delta:number):number;
		
		public init():void;
		/** Note that for Particle, the parameter is of type PIXI.Texture */
		public applyArt(art:any):void;
		public update(delta:number):number;
		public kill():void;
		public destroy():void;
	}
	
	export interface EaseSegment {
		cp:number;
		s:number;
		e:number;
	}
	
	export class ParticleUtils {
		public static verbose:boolean;
		public static rotatePoint(angle:number, p:PIXI.Point):void;
		public static combineRGBComponents(r:number, g:number, b:number):number;
		public static normalize(p:PIXI.Point):void;
		public static scaleBy(p:PIXI.Point, value:number):void;
		public static length(p:PIXI.Point):number;
		public static hexToRGB(color:string, output?:[number, number, number]):[number, number, number];
		public static generateEase(segments:EaseSegment[]):(time:number)=>number;
		public static getBlendMode(name:string):number;
	}
	
	export class PathParticle extends Particle {
		public path:(x:number)=>number;
		public initialRotation:number;
		public initialPosition:PIXI.Point;
		public movement:number;
		
		public static parseArt(art:TexSrc[]):PIXI.Texture[];
		public static parseData(data:{path:string}):any;
	}
}

export = particles;